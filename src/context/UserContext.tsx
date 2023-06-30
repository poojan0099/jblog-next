import { createContext } from 'react';

const UserContext = createContext({
    text: "",
    setText: (text: string) => {},
    slug: "",
    setSlug: (slug: string) => {},
});


export default UserContext;