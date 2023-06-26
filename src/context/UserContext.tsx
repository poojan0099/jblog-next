import { createContext } from 'react';

const UserContext = createContext({
    text: "",
    setText: (text: string) => {}
});


export default UserContext;