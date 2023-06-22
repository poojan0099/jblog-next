import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch';
import NoSSR from '@/hoc/NoSSR';

const Navbar = () => {

    const navLinks = [
        {
            name: "About",
            link: "/about/"
        },
        {
            name: "Blog",
            link: "/blog/"
        },
        {
            name: "Learn",
            link: "/learn/"
        },
        {
            name: "Explore",
            link: "/explore/"
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
                <a className="btn btn-ghost normal-case text-xl">
                    Jblog-next
                </a>
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
                <NoSSR>
                    <ThemeSwitch />
                </NoSSR>
            </div>
        </div >
    )
}

export default Navbar