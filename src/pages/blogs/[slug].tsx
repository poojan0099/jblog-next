import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SingleBlogDataType } from '@/types/type';
import api from '@/service/api';
import { Blog } from '@/components/Blog';


// This is your dynamic page component
const Page = () => {
    const [post, setPost] = useState({} as SingleBlogDataType);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const inner = async () => {
            // get path from router
            const { slug } = router.query;

            // fetch data from api
            const blog = await api.getSingleBlog(slug as string);

            setPost(blog);
        }
        inner();
    }, [router.isReady])


    // Render loading state if slug is not available yet
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {
                post && post.data ? (
                    <Blog
                        blog={post.data}
                    />
                ) : (
                    <div className='flex justify-center items-center min-h-[200px] min-w-full '>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                )
            }
        </>
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