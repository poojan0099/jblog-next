import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import env from '@/env';
import { useRouter } from 'next/router';
import slugify from 'slugify';
import { Blog, BlogType, StrapiDataType } from '@/components/Render';
import useSWR from 'swr'


let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${env.STRAPI_SERVER_URL}/api/blogs?populate=*`,
    headers: {
        'api_key': env.STRAPI_API_KEY
    }
};

// Function to generate a slug from the post title
const generateSlug = (title: string) => {
    const slug = slugify(title, {
        lower: true,
        remove: /[^\w\s-]/g,
        replacement: '-',
    });

    return slug;
};


// This is your dynamic page component
const Page = ({ post }: { slug: string, post: any }) => {
    const router = useRouter();

    // Render loading state if slug is not available yet
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Blog
            blog={post.data as BlogType}
        />
    );
};

// This function generates the paths for your dynamic slugs
export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch the list of posts from your data source
    const posts = await fetchPosts(); // Replace with your data fetching logic

    if (!posts) {
        return {
            paths: [],
            fallback: true,
        };
    }

    // Map the posts to the required format
    const paths = posts?.data.map((post) => {
        return {
            params: { slug: generateSlug(post.attributes.Title) },
        }
    })

    return {
        paths,
        fallback: true, // Enable fallback for not yet generated paths
    };
};

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Retrieve the slug from the params object
    const { slug } = params as any;
    let post = {};

    try {
        // Fetch the data for the specific slug
        post = await fetchPostBySlug(slug as string); // Replace with your data fetching logic
        return {
            props: {
                slug,
                post,
            },
            revalidate: 60, // Set the revalidation period in seconds
        };
    } catch (error) {
        return {
            props: {
                slug: "slug not found",
                post: "post not found"
            }
        };
    }


};


// Function to fetch the list of posts
const fetchPosts = async () => {
    
    // Replace with your data fetching logic
    const response = await axios.get(`${env.STRAPI_SERVER_URL}/api/blogs?populate=*`, {
        headers: {
            'api_key': env.STRAPI_API_KEY,
        },
    });

    return response.data as StrapiDataType;
};

// Function to fetch a post by slug
const fetchPostBySlug = async (slug: string) => {
    // Replace with your data fetching logic
    const response = await axios.get(`${env.STRAPI_SERVER_URL}/api/blogs/${slug}?populate=*`, {
        headers: {
            'api_key': env.STRAPI_API_KEY,
        },
    });

    return response.data;
};

export default Page;