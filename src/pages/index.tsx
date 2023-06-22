import { ThemeProvider } from 'next-themes'
import Render from "@/components/Render";

import { useState } from "react";
import Frame from '@/components/Frame';

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
            <Frame>
                <Render />
            </Frame>
        </ThemeProvider>
    )
}

export default Home