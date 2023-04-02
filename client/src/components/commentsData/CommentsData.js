
const CommentsData = (props) => {
    const { name, comment, createdAt,email } = props.commentData;
    let data = new Date(createdAt)
    data = data.toLocaleDateString()

    const user = localStorage.getItem(`${email}`)

    return (
        <div className="bg-gray-100">
            <div className="">
                <div className="relative flex max-w-[1200px] mx-auto flex-col shadow-2xl mb-10 bg-gray-200 rounded-lg ">
                    <div className=" p-0 m-0 max-h-fit h-fit">
                        <i className="inline  mr-4">Name:</i><span className="inline font-bold p-0">{name}</span>
                    </div>
                    <div className="my-3 p-0 m-0 max-h-fit h-fit">
                        <i className="inline mr-4 mb-3">Comment:</i><span className="inline p-0">{comment}</span>
                    </div>
                    <span className="inline m-0 p-0">{data}</span>
                    {
                        user &&  <span className="absolute top-0 right-0 cursor-pointer">Edit</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default CommentsData