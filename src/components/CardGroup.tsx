import Card from "@/components/Card";
import env from "@/env";
import { BlogListType } from "@/types/type";
import Link from "next/link";

const CardGroup = ({ blogList }: { blogList: BlogListType }) => {
    return (
        <div className="flex items-center justify-center max-w-3/4 mt-5 ">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {
                    blogList.data.map((item, index) => {
                        return (
                            <Link
                                href={`/blogs/${item.id}`}
                                key={index}>
                                <Card
                                    title={item.attributes.title}
                                    createdAt={item.attributes.createdAt}
                                    imageURL={
                                        item.attributes.image1?.data?.attributes?.url ||
                                        item.attributes.image2?.data?.attributes?.url ||
                                        item.attributes.image3?.data?.attributes?.url ||
                                        env.FALLBACK_IMAGE_URL ||
                                        env.PLACEHOLDER_IMAGE_URL || ''
                                    }
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardGroup