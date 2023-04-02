
const Contact = (props) => {
  const { getComments, getCommentFormData, commentPostData } = props;
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <form onSubmit={getComments} className="flex flex-col gap-3 bg-gray-200 md:p-20 p-2 shadow-lg rounded-lg mb-10 container mx-auto">
          <textarea className="rounded-lg resize-none md:text-2xl text-xl" onChange={getCommentFormData} name="comment" value={commentPostData.comment} id="comment" cols="30" rows="10" placeholder='join the conversation'></textarea>
          <input className="rounded-lg resize-none md:text-2xl text-xl p-2" onChange={getCommentFormData} name='name' type="text" value={commentPostData.name} placeholder='your Name' />
          <input className="rounded-lg resize-none md:text-2xl text-xl p-2" onChange={getCommentFormData} name='email' value={commentPostData.email} type="email" placeholder='Email' />
          <input className="rounded-lg bg-gray-100 font-semibold cursor-pointer py-6 text-xl" type="submit" value="Post Comment" />
        </form>
      </div>
    </div>
  )
}

export default Contact