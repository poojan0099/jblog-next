import Render from '@/components/Render';
import UserContext from '@/context/UserContext';
import { useState } from 'react';

const Home = () => {
    const [text, setText] = useState("");
    const [slug, setSlug] = useState("");

    return (
        <UserContext.Provider
            value={{
                text,
                setText,
                slug,
                setSlug
            }}
        >
            <Render />
        </UserContext.Provider >
    )
}

export default Home