import { useEffect, useState } from "react";

type breadcrumbType = {
    name: string,
    link: string
}[];

const BreadCrumb = ({ paths }: {
    paths: breadcrumbType
}) => {
    const [breads, setBreads] = useState<string[]>([]); // ["Home", "Library", "Data"]
    const [activePath, setActivePath] = useState("Home");

    // take each breadcrumb item and concat it with /
    // add it to the currPath variable 
    // repeat until you reach the end of the array

    useEffect(() => {
        let currPath = "";
        let breadList = [];
        for (let i = 0; i < paths.length; i++) {
            currPath += paths[i].name + "/";
            breadList.push(currPath);
        }
        setBreads(breadList);
    }, [])

    return (
        <>
            <div className="text-sm breadcrumbs p-0">
                <ul className="p-0">
                    {
                        // concat each item in the array with / and map it to a list item
                        breads.map((path, index) => {
                            return (
                                <li
                                    key={index}
                                    // className={`breadcrumb-item m-0 p-0 test ${activePath === paths[index].name ? "active" : ""}`}
                                    aria-current="page"
                                    onClick={() => setActivePath(paths[index].name)}

                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>

                                    <a href={path}>{paths[index].name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>

    )
}

export default BreadCrumb