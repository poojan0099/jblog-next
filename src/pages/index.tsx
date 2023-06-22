import { ThemeProvider } from 'next-themes'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Render from "@/components/Render";

import { useState } from "react";

type buttonProps = {
    buttonText: string,
    buttonColor: string,
    onClick: () => void
}

export const Button = ({ buttonColor, onClick, buttonText }: buttonProps) => {
    const [counter, setCounter] = useState(0);

    return (
        <button
            className={`btn btn-primary ${buttonColor}`}
            onClick={onClick}
        >
            {buttonText} {counter}
        </button>
    )
}


const Home = () => {
    return (
        <ThemeProvider>
            <div className="flex flex-col items-center mx-[40px] md:mx-auto my-0">
                <Navbar />
                <Render />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Home