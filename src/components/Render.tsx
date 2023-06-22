import React, { useEffect, useState } from 'react';
import BreadCrumb from './BreadCrumb';
import Image from 'next/image';
import RenderMarkdown from '@/hoc/RenderMarkdown';
import CardGroup from './CardGroup';


export type SingleImageFormatType = {
    ext: string,
    url: string,
    hash: string,
    mime: string,
    name: string,
    path: string,
    size: number,
    width: number,
    height: number,
    provider_metadata: {
        public_id: string,
        resource_type: string
    }
}

export type ImageType = {
    data: {
        id: number,
        attributes: {
            name: string,
            alternativeText: string,
            caption: string,
            width: number,
            height: number,
            formats: {
                large: SingleImageFormatType,
                small: SingleImageFormatType,
                medium: SingleImageFormatType,
                thumbnail: SingleImageFormatType
            },
            hash: string,
            ext: string,
            mime: string,
            size: number,
            url: string,
            previewUrl: string,
            provider: string,
            provider_metadata: {
                public_id: string,
                resource_type: string
            },
            createdAt: string,
            updatedAt: string
        }
    }
}

export type BlogType = {
    id: number,
    attributes: {
        Title: string,
        Content: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        locale: string,
        text1: string,
        text2: string,
        text3: string,
        Image: ImageType,
        image1: ImageType,
        image2: ImageType,
        image3: ImageType,
    }
}

export type StrapiDataType = {
    data: BlogType[],
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}

export const ImageComponent = ({ image }: { image: ImageType }) => {
    return (
        <>
            {
                image && image?.data && (
                    <div className='flex flex-1 justify-center items-center m-0 p-0 '>
                        <Image
                            width={image?.data?.attributes?.width}
                            height={image?.data?.attributes?.height}
                            src={image?.data?.attributes?.url}
                            alt={image?.data?.attributes?.name}
                            unoptimized
                        />
                    </div>
                )
            }
        </>
    )
}

export type SingleBlogLanguageType = {
    content: ImageType,
    text: string,
    lang: string
}

export type BlogLanguageType = SingleBlogLanguageType[];


export const Blog = ({ blog }: { blog: BlogType }) => {
    const [language, setLanguage] = useState<string>('english');

    const blogData: BlogLanguageType = [
        {
            content: blog?.attributes?.image1,
            text: blog?.attributes?.text1,
            lang: 'english'
        },
        {
            content: blog?.attributes?.image2,
            text: blog?.attributes?.text2,
            lang: "hindi"
        },
        {
            content: blog?.attributes?.image3,
            text: blog?.attributes?.text3,
            lang: "gujrati"
        }
    ]

    const isButtonActive = (blogData: BlogLanguageType, lang: string) => {
        return blogData.filter((data) => data.lang === lang.toLowerCase())[0].content.data !== null
    }

    return (
        <section
            className='prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto  '
            aria-label='blog post content'
        >

            <BreadCrumb
                paths={[
                    {
                        name: "food",
                        link: "",
                    },
                    {
                        name: "pizza",
                        link: "pizza.com"
                    }
                ]}
            />

            <h1>
                {blog?.attributes?.Title}
            </h1>


            <div className="inline-flex rounded-md shadow-sm" role="group">
                <div className="join">
                    {/* <pre>
                        {JSON.stringify(
                            isButtonActive(blogData, "english")
                            , null, 2)}
                    </pre> */}
                    {
                        ["english", "hindi", "gujrati"].map((lang) => {
                            return (
                                <button
                                    type='button'
                                    key={lang}
                                    disabled={
                                        !isButtonActive(blogData, lang)
                                    }
                                    className={
                                        isButtonActive(blogData, lang) ?
                                            `btn btn-sm btn-outline join-item btn-primary ${lang.toLowerCase() === language ? 'btn-primary' : 'btn-secondary'}` :
                                            `btn btn-sm btn-outline join-item btn-disabled`
                                    }

                                    onClick={() => setLanguage(lang.toLowerCase())}
                                >
                                    {lang.toLowerCase().substring(0, 3)}
                                </button>
                            )
                        })
                    }
                </div>
            </div>


            <p>
                {new Date(blog?.attributes?.createdAt).toLocaleDateString("en")}
            </p>

            {/* <pre>
                {JSON.stringify(blog.attributes, null, 2)}
            </pre> */}

            <ImageComponent image={blog?.attributes?.Image} />
            <RenderMarkdown
                text={blog?.attributes?.Content}
            />

            {
                blogData.map((attribute, index) => {
                    return (

                        <React.Fragment key={index}>
                            {
                                attribute.lang === language && (
                                    <>
                                        <ImageComponent image={attribute.content} />
                                        <p>
                                            {attribute.text}
                                        </p>
                                    </>
                                )
                            }

                        </React.Fragment>
                    )
                })
            }
        </section>
    )
}

export const Render = () => {
    return (
        <CardGroup
            // use placeholder image
            data={[
                {
                    title: 'Blog 1',
                    description: 'This is a blog',
                    imageURL: 'https://via.placeholder.com/150x150'
                },
                {
                    title: 'Blog 2',
                    description: 'This is a blog',
                    imageURL: 'https://via.placeholder.com/150x150'
                },
                {
                    title: 'Blog 3',
                    description: 'This is a blog',
                    imageURL: 'https://via.placeholder.com/150x150'
                },
                {
                    title: 'Blog 4',
                    description: 'This is a blog',
                    imageURL: 'https://via.placeholder.com/150x150'
                },
                {
                    title: 'Blog 5',
                    description: 'This is a blog',
                    imageURL: 'https://via.placeholder.com/150x150'
                }
            ]}
        />
    )
}

export default Render