const aboutData = [
    {
        header: "Our Mission",
        content: "Our mission is to help businesses grow and succeed in today's competitive market."
    },
    {
        header: "Our Vision",
        content: "Our vision is to be the best digital marketing agency in the world."
    },
    {
        header: "Our Values",
        content: "Our values are to be honest, transparent, and ethical in everything we do."
    }
]

const About = () => {
    return (
        <>
            <div>
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold ">About Us</h1>
                    <p className="mt-6 text-lg">
                        {`We are a team of passionate individuals dedicated to providing the best service to our clients. Our mission is to help businesses grow and succeed in today's competitive market.`}
                    </p>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold ">Our Team</h2>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                aboutData.map((item, index) => {
                                    return (
                                        <div className="rounded-lg shadow-lg overflow-hidden" key={index} >
                                            <img className="w-full h-48 object-cover" src="https://source.unsplash.com/random/800x600/?person" alt="Person" />
                                            <div className="p-4">
                                                <h3 className="text-lg font-bold ">
                                                    {item.header}
                                                </h3>
                                                <p className="mt-2 ">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};




export default About;
