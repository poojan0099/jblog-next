
const Card = ({
    title,
    createdAt,
    imageURL,
}: {
    title: string
    createdAt: string
    imageURL: string
}) => {
    return (
        <div className="
        flex flex-col justify-center items-center flex-wrap
        max-w-[350px] md:max-w-sm rounded-[10px] p-[20px] shadow  dark:border-[1px] dark:border-white dark:border-solid ">
            {
                imageURL ? (
                    <>
                        <img
                            className="rounded-[10px] h-[250px]"
                            alt="cake"
                            src={imageURL}
                        />
                        <h3 className="font-bold mt-5 line-clamp-2 ">
                            {title}
                        </h3>
                        <p className="pt-5 leading-6">
                            {createdAt && new Date(createdAt).toLocaleDateString("en")}
                        </p>
                    </>
                ) : (
                    <>
                        <div className="min-w-[200px] min-h-[200px] grid place-content-center ">
                            <span className="loading loading-bars loading-lg">
                            </span>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Card