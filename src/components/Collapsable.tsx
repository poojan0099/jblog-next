import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";


const Collapsable = (
    props: {
        tabData: string[]
    }
) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const listStyle = (key: number) => key == 0 ? "mt-2" : "mt-1"

    return (
        <section className="flex w-full flex-col border-y-black border-[1px] border-x-0 ">
            <div className="flex justify-between mt-2 select-none cursor-pointer "
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <h1 className="text-blue-500">
                    On this Page
                </h1>
                <button
                    className=" font-bold"

                >
                    {
                        isCollapsed ?
                            <FontAwesomeIcon
                                icon={faArrowCircleUp}
                            />
                            :
                            <FontAwesomeIcon
                                icon={faArrowCircleDown}
                            />
                    }
                </button>
            </div>
            <div className="mb-2">
                {
                    !isCollapsed && (
                        <ul className="list-inside list-none ">
                            {
                                props.tabData.map((tab: string, key: number) => {
                                    return (
                                        <li key={key}
                                            className={listStyle(key) + " hover:underline hover:bg-brightBlue "} >
                                            <a href={'#' + tab}>
                                                {tab}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </section>
    )
}

export default Collapsable