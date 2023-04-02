import {NavLink, Link} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {sidebar} from '../features/sideBarSlicer';
import { SlMenu } from "react-icons/sl";
import { useEffect,useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode'

const AdminNavbar = () => {
    const dispatch = useDispatch();

    const [theme,setTheme] = useState('dark')
    const colorTheme = theme === 'dark'?'light':'dark';
    const [darkSide,setDarkSide] = useState(colorTheme === "light" ? true : false)

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme)

        localStorage.setItem('theme',theme);
    },[theme,colorTheme])

    const setdarkMode = (checked) => {
        const newtheme = theme === "dark" ?'light':'dark';
        setTheme(newtheme)
        setDarkSide(checked)
    }


    return (
        <nav className={"bg-white text-black dark:text-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 fixed top-0 left-0 w-full shadow-xl z-20"}>
            <div className="container max-w-[1200px] mx-auto h-full flex items-center justify-between ">
                <div className="p-3">
                <Link to='/'>
                    <h1 className='sm:text-2xl text-xl ml-2 font-bold hover:text-sky-500'>Programming World</h1>
                    </Link>
                </div>
                <div className="hidden md:block ">
                    <DarkModeSwitch className='inline-block'
                        onChange={setdarkMode}
                        checked={darkSide}
                        size={24}
                    />
                    <NavLink className="m-3 text-xl font-medium hover:text-sky-500 transition-colors" to="/">Home</NavLink>
                    <NavLink className="m-3 font-medium text-xl hover:text-sky-500 transition-colors" to="/about">About</NavLink>
                    <NavLink className="m-3 font-medium text-xl hover:text-sky-500 transition-colors" to="/dashbord">Dashbord</NavLink>
                    <NavLink className="m-3 font-medium text-xl hover:text-sky-500 transition-colors" to="/createpost">CreatePost</NavLink>
                </div>
                <div className="md:hidden text-3xl mr-4 cursor-pointer flex gap-4 items-center">
                <DarkModeSwitch 
                onChange={setdarkMode}
                checked={darkSide}
                size={24}
                />
                <SlMenu onClick={() => dispatch(sidebar())}/>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar