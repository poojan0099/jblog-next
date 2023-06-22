import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes"
import { useEffect } from "react";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || theme === 'light') {
            setTheme(theme);
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    }, [])

    return (
        <div className="border-[1px] p-1 rounded-full ">
            <button
                className={`btn btn-ghost btn-sm btn-circle ${theme === 'light' ? 'btn-active' : ""} `}
                onClick={() => setTheme('light')}
            >
                <FontAwesomeIcon
                    icon={faSun}
                />
            </button>
            <button
                className={`btn btn-ghost btn-sm btn-circle ${theme === 'dark' ? 'btn-active' : ""} `}
                onClick={() => setTheme('dark')}
            >
                <FontAwesomeIcon
                    icon={faMoon}
                />
            </button>
        </div>
    )
}

export default ThemeSwitch