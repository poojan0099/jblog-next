import Card from "@/components/Card";

const CardGroup = ({ data }: {
    data: {
        title: string,
        description: string,
        imageURL: string
    }[]
}) => {
    return (
        <div className="flex gap-5 flex-wrap justify-center  ">
            {
                data.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            imageURL={item.imageURL}
                        />
                    )
                })
            }
        </div>
    )
}


// {
    /* <div className="prose text-center my-10">
                    <h1>
                        What We Do
                    </h1>
                    <p>
                        We make gluten-free cupcakes, cookies, muffins, paninis and much more.
                    </p>
                </div>
                {/* <CardGroup
                    data={[
                        {
                            title: "Vegan Goods",
                            description: "Curabitur vulputate consectetur augue non molestie. Vestibulum scelerisque lorem at libero.",
                            imageURL: "https://images02.nicepage.com/9a/30/9a309bb0fee6f2457731ec5a00d2a478.jpeg"
                        },
                        {
                            title: "Wedding Menu",
                            description: "Curabitur vulputate consectetur augue non molestie. Vestibulum scelerisque lorem at libero.",
                            imageURL: "https://images02.nicepage.com/9a/30/9a309bb0fee6f2457731ec5a00d2a478.jpeg"
                        },
                        {
                            title: "Sweet Cupcakes",
                            description: "Curabitur vulputate consectetur augue non molestie. Vestibulum scelerisque lorem at libero.",
                            imageURL: "https://images02.nicepage.com/9a/30/9a309bb0fee6f2457731ec5a00d2a478.jpeg"
                        }
                    ]}
                /> */
            // } */}

export default CardGroup