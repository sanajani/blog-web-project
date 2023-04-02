import { Link } from "react-router-dom"



const Posts = (props) => {
    const { postTitle, postSummary, postImage, createdAt, slug } = props.eachPost;
    let data = new Date(createdAt)
    data = data.toLocaleDateString()

  return (
    <div className="lg:max-w-[70%] md:max-w-[91%] container p-5 mx-auto my-5 bg-gradient-to-r relative bg-white dark:from-slate-600 dark:to-slate-700 rounded-3xl">
                            <Link to={`/blogpost/${slug}`}>
                                <div className="flex flex-col gap-8 md:flex-row max-w-[100%] md:w-full group container mx-auto">
                                    <div className="basis-4/12">
                                        <img src={`http://localhost:8000/${postImage}`} alt={`${postTitle}`} className="object-cover h-full" />
                                    </div>
                                    <div className="basis-8/12">
                                        <h1 className="lg:text-4xl sm:text-3xl text-2xl text-black dark:text-white font-semibold group-hover:text-sky-500">{postTitle}</h1>
                                        <p className="lg:text-xl md:leading-relaxed text-gray-900 dark:text-gray-300 text-base leading-7">{postSummary}</p>
                                        <div className="flex justify-between">
                                            <div className="dark:text-white text-black">
                                                <span className="lg:mx-3 sm:text-base text-sm">Date:  {data}</span>
                                                <span className="lg:mx-3 mx-3 sm:text-base text-sm">Author:  Sanaullah jan</span>
                                            </div>
                                            <div className="lg:pr-10 dark:text-white text-black lg:text-xl group-hover:text-sky-500">
                                                Read More<span className="pl-1"> +</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className='absolute w-14 h-14 rounded-full right-2 top-0 grid place-content-center text-3xl text-sky-500 bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 from-gray-200 to-gray-300'>{props.postIndex + 1}</span>
                            </Link>
                        </div>
  )
}

export default Posts