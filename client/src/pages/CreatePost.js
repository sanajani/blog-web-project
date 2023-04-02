import './CreatePost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios'


const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];





const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');

  const createNewPost = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    formData.set('title', title)
    formData.set('summary', summary);
    formData.set('content', content);
    formData.set('file', files[0])
    // const formObject = Object.fromEntries(formData)

    await axios('/post', {
      method:"POST",
      data: formData
    })

    formData.delete('title', title)
    formData.delete('summary', summary);
    formData.delete('content', content);
    formData.delete('file', files[0])
    setTitle('')
    setContent('')
    setSummary('')
  }

  return (
    <div className='bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 dark:text-white min-h-screen from-gray-200 to-gray-300'>
      <div className="max-w-[1200px] mx-auto mt-28">
        <form onSubmit={createNewPost} className="flex flex-col w-9/12 mx-auto">
          <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl'>Create Post</h1>
          {/* title */}
          <input type="text"
          className=' my-3 p-4 text-2xl rounded-lg text-black'
            value={title}
            name='title'
            placeholder='Title'
            onChange={e => setTitle(e.target.value)} />
          {/* summary */}
          <textarea name='summary'
          className='my-3 p-4 text-xl rounded-lg text-black'
            value={summary}
            placeholder='Summary' onChange={e => setSummary(e.target.value)} ></textarea>

          {/* file  */}
          <input type="file"
          className=' my-3 text-2xl rounded-lg'
            name='file'
            onChange={(e) => setFiles(e.target.files)}
            placeholder='Upload an Image' />
          {/* text area */}
          <ReactQuill
          className=' my-3 text-black rounded-lg h-1/2 bg-white text-3xl min-h-[120px] resize-none m-0'
            value={content}
            modules={modules}
            formats={formats}
            // readOnly={true}
            onChange={setContent} />
          {/* Button */}
          <button className=' my-3 p-4 text-2xl rounded-lg text-sky-900 bg-sky-200 font-bold mb-28'>Create Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost