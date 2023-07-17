import env from '@/env';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useLocalStorage } from "usehooks-ts";

const Navbar = () => {
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") || "light";
        setTheme(localTheme);
    }, [setTheme]);


    const themeChangeHandler = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const navLinks = [
        {
            name: "Blog",
            link: "/"
        },
        {
            name: "About",
            link: "/about/"
        }
    ]

    return (
        <div className="navbar bg-base-100 dark:shadow dark:border-b-[1px] dark:border-white shadow-md ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks.map((link, key) => {
                                return (
                                    <li key={key}>
                                        <Link href={link.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link href="/" >
                    <Image
                        src={env.LOGO_IMAGE_URL || ''}
                        alt={env.LOGO_IMAGE_ALT || ''}
                        width={200}
                        height={80}
                        className="rounded-md dark:filter dark:mix-blend-difference "
                    >
                    </Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((link, key) => {
                            return (
                                <li key={key}>
                                    <Link href={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate">
                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" onClick={themeChangeHandler} />

                    {/* <!-- sun icon --> */}
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="swap-off w-7 h-7"
                    />

                    <FontAwesomeIcon icon={faSun} className="swap-on w-7 h-7" />
                </label>
            </div>
        </div >
    )
}

export default Navbar