import './ShowSinglePost.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Header from '../components/Header';
import Contact from './contact/Contact';
import CommentsData from '../components/commentsData/CommentsData';

const ShowSinglePost = () => {
  const { slug } = useParams();

  // set post data to usestate
  const [postData, setPostData] = useState(null);

  // set comments form comment box 
  const [commentPostData, setCommentPostData] = useState({
    name: '',
    email: '',
    comment: ''
  })

  const [commentData, setCommentData] = useState(null);

  const getCommentFormData = async (e) => {
    setCommentPostData({ ...commentPostData, [e.target.name]: e.target.value })
  }

  // add comments to database
  const addToComments = useCallback(async (e) => {
    e.preventDefault();
    await axios.post('/post/newcomment', {
      _id: postData._id,
      name: commentPostData.name,
      email: commentPostData.email,
      comment: commentPostData.comment
    })
    // console.log(res);
    localStorage.setItem(`${commentPostData.email}`, commentPostData.email);
    setCommentPostData({
      name: '',
      email: "",
      comment: ""
    })
  }, [commentPostData, postData?._id])

  // get comment from database
  useEffect(() => {
    const getCommentsFromBackend = async () => {
      try {
        const res = await axios.get(`/post/getcomments${postData?._id}`);
        const data = res.data.postComments;
        setCommentData(data)
      } catch (error) {
        console.log(error.message);
      }
    }
    getCommentsFromBackend()
  }, [postData?._id, addToComments])

  // get single post from databse
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const res = await axios.get(`/post/getpost/${slug}`)
        let data = res?.data?.post
        setPostData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getSinglePost()
    document.title = slug
  }, [slug])

  const deleteSinglePost = async () => {
    const res = await axios.delete(`/post/deletepost/${slug}`)
    console.log(res.data);
  
  }


  // console.log(commentData);
  if (!postData) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <Header title={postData.postTitle} postSummary={postData.postSummary} />
      <div className="bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 min-h-[100vh] bg-gray-100 pb-20 relative md:top-24 top-20 mb-20 ">
        <div className="relative max-w-[1200px] mx-auto container px-4 bg-white dark:bg-transparent shadow-2xl pb-24">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl py-6 dark:text-gray-300 my-6">{postData.postTitle}</h1>
          <div>
            <div> time <span>{new Date(postData.createdAt).toLocaleDateString()}</span></div>
            <div>author <span>Sanaullah</span></div>
          </div>
          <div className="w-full">
            <img className="w-full h-[70vh] object-cover" src={`${postData.postImage}`} alt="" />
          </div>
          <h2 className=" lg:text-3xl sm:text-2xl text-xl dark:text-gray-400">{postData.postSummary}</h2>
          <section className="dark:text-gray-300 page_content">
            <div className="page_content_div list-disc" dangerouslySetInnerHTML={{ __html: postData.postContent }}></div>
          </section>
          {/* edit buttons */}
          <div className='absolute top-0 right-0 flex gap-8 mx-4'>
            <span>Edit</span>
            <span className='cursor-pointer' onClick={deleteSinglePost}>Delete</span>
          </div>
        </div>
      </div>
      <Contact getComments={addToComments} getCommentFormData={getCommentFormData} commentPostData={commentPostData} />
      {
        commentData?.map((element, index) => {
          return <CommentsData key={index} commentData={element} commentIndex={index} />
        })
      }
    </>
  )
}

export default ShowSinglePost


// ImmutableStateInvariantMiddleware took 33ms, which is more than the warning threshold of 32ms.
// If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
// It is disabled in production builds, so you don't need to worry about that.