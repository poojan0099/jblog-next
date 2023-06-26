import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardGroup from './CardGroup';
import api from '@/service/api';
import { BlogListType, MultipleBlogLanguageType, SingleBlogType, SingleImageType } from '@/types/type';
import { BlogListDefault } from '@/types/data';

export const ImageComponent = ({ image }: { image: SingleImageType }) => {
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


export const Render = () => {
    const [blogList, setBlogList] = useState<BlogListType>(BlogListDefault);

    useEffect(() => {
        const inner = async () => {
            const data = await api.getBlogList(1) as BlogListType;
            setBlogList(data);
        }
        inner();
    }, [])


    return (
        <>
            <CardGroup
                blogList={blogList}
            />
        </>
    )
}

export default Render