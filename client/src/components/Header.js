import { SlSocialTwitter,SlSocialFoursqare,SlSocialInstagram,SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className='min-h-[60vh] pt-24 bg-gradient-to-r dark:from-slate-900 dark:to-slate-800  shadow-lg '>
            <div className="max-w-[1200px] mx-auto p-6">
                <h1 className="md:text-4xl text-3xl font-bold text-black dark:text-slate-300 md:my-10">{props.title || "Programming Blog"}</h1>
                <p className="text-xl dark:text-slate-400 text-gray-900 font-medium tracking-wide md:my-10 ">{props.postSummary || "Enjoy personalized, fun, and interatcive learning process while becoming a great Programmer."}</p>
                {props ? null : <div className="flex dark:text-white gap-5 md:text-3xl text-2xl md:my-8 my-10">
                    <Link to='/google.com' className="hover:bg-red-50 p-2 hover:rounded-full cursor-pointer group "><SlSocialTwitter  className= "group-hover:text-slate-900" /></Link>
                    <Link to='/google.com' className="hover:bg-red-50 p-2 hover:rounded-full cursor-pointer group" ><SlSocialFoursqare className="group-hover:text-slate-900"  /></Link>
                    <Link to='/google.com' className="hover:bg-red-50 p-2 hover:rounded-full cursor-pointer group" ><SlSocialInstagram className="group-hover:text-slate-900"  /></Link>
                    <Link to='/google.com' className="hover:bg-red-50 p-2 hover:rounded-full cursor-pointer group" ><SlSocialLinkedin  className="group-hover:text-slate-900" /></Link>
                </div>}
            </div>
        </header>
    )
}

export default Header