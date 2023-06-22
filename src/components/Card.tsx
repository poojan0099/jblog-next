
const Card = ({
    title,
    description,
    imageURL,
}: {
    title: string
    description: string
    imageURL: string
}) => {
    return (
        <div className="max-w-[350px] md:max-w-sm rounded-[10px] p-[20px] bg-white shadow ">
            <img
                className="rounded-[10px] h-[250px]"
                alt="cake"
                src={imageURL}
            />
            <h3 className="font-bold mt-5">
                {title}
            </h3>
            <p className="pt-5 leading-6">
                {description}
            </p>
        </div>
    )
}

export default Card