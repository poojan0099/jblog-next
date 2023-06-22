import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import env from '@/env';
import { useRouter } from 'next/router';
// import slugify from 'slugify';
import { Blog, BlogType, StrapiDataType } from '@/components/Render';
// import useSWR from 'swr'
import { useEffect, useState } from 'react';
import NoSSR from '@/hoc/NoSSR';
import Frame from '@/components/Frame';


let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${env.STRAPI_SERVER_URL}/api/blogs?populate=*`,
    headers: {
        'api_key': env.STRAPI_API_KEY
    }
};

// Function to generate a slug from the post title
// const generateSlug = (title: string) => {
//     const slug = slugify(title, {
//         lower: true,
//         remove: /[^\w\s-]/g,
//         replacement: '-',
//     });

//     return slug;
// };

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

// function to fetch a post by id
const fetchPostById = async (slug: string) => {
    // Replace with your data fetching logic
    const response = await axios.get(`${env.STRAPI_SERVER_URL}/api/blogs/${slug}?populate=*`, {
        headers: {
            'api_key': env.STRAPI_API_KEY,
        },
    });

    return response.data;
};



// This is your dynamic page component
const Page = () => {
    const [post, setPost] = useState({} as BlogType);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const inner = async () => {
            // get path from router
            const { slug } = router.query;


            // fetch data from strapi
            const post = await fetchPostById(slug as string);
            setPost(post.data as BlogType);
        }
        inner();
    }, [router.isReady])


    // Render loading state if slug is not available yet
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Frame>
            {
                post && post.attributes && (
                    <NoSSR>
                        <Blog
                            blog={post as BlogType}
                        />
                    </NoSSR>
                )
            }
        </Frame>
    );
};

// // This function generates the paths for your dynamic slugs
// export const getStaticPaths: GetStaticPaths = async () => {
//     // Fetch the list of posts from your data source
//     const posts = await fetchPosts(); // Replace with your data fetching logic

//     if (!posts) {
//         return {
//             paths: [],
//             fallback: true,
//         };
//     }

//     // Map the posts to the required format
//     const paths = posts?.data.map((post) => {
//         return {
//             params: { slug: generateSlug(post.attributes.Title) },
//         }
//     })

//     return {
//         paths,
//         fallback: true, // Enable fallback for not yet generated paths
//     };
// };

// // @ts-ignore
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     // Retrieve the slug from the params object
//     const { slug } = params as any;
//     let post = {};

//     try {
//         // Fetch the data for the specific slug
//         post = await fetchPostById(slug as string); // Replace with your data fetching logic
//         return {
//             props: {
//                 slug,
//                 post,
//             },
//             revalidate: 60, // Set the revalidation period in seconds
//         };
//     } catch (error) {
//         return {
//             props: {
//                 slug: "slug not found",
//                 post: "post not found"
//             }
//         };
//     }
// };



export default Page;