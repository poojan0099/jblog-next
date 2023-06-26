import Card from "@/components/Card";
import { BlogListType } from "@/types/type";
import Link from "next/link";

const CardGroup = ({ blogList }: { blogList: BlogListType }) => {
    return (
        <div className="flex gap-5 flex-wrap justify-center mt-5 ">
            {
                blogList.data.map((item, index) => {
                    return (
                        <Link
                            href={`/blogs/${item.id}`}
                            key={index}>
                            <Card
                                title={item.attributes.title}
                                createdAt={item.attributes.createdAt}
                                imageURL={item.attributes.Image?.data?.attributes?.url}
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CardGroup