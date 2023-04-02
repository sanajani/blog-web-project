import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Posts from "./everypost/Posts";

const Home = () => {
    const [allPost, setallPost] = useState([])
    const getAllPost = async () => {
        const res = await axios.get('/post/get')
        const data = await res.data
        setallPost(data.posts)
    }
    useEffect(() => {
        getAllPost()
    }, [])

    return (
        <>
            <Header />
            {
                allPost.map((eachPost, postIndex) => {
                    return <div className='bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 bg-gray-100 pt-14' key={postIndex}>
                       <Posts eachPost={eachPost} postIndex={postIndex}/>
                    </div>
                })
            }
            <span className="fixed bottom-5 right-20 md:text-5xl text-3xl sm:4xl cursor-pointer">
                <BsFillArrowUpCircleFill className="text-sky-500" />
            </span>
        </>
    )
}

export default Home