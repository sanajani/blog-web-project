import './BlogSettup.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { increaseLoginUser } from '../features/isLogin';

const Login = () => {
  const dispatch = useDispatch();

  const history = useNavigate();
  const [error, setError] = useState(null);

  const [value,setValue] = useState({
    name:'',
    email:'',
    password:''
  });

  const inputValues = (e) => {
    setValue({...value, [e.target.name]:e.target.value})
  }

  const loginFunc = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/login',{
        name: value.name,
        email: value.email,
        password: value.password
      },{
        withCredentials:true
      })
      if(res.data){
        dispatch(increaseLoginUser())
      }
      history('/dashbord');
    } catch (error) {
      let err = error.response.data.message
      setError(err)
    }

  }

  return (
    <div className=''>
        <form onSubmit={loginFunc} className="max-w-[1200px] mx-auto mt-36 h-screen flex flex-col bg-slate-300">
        <h1 className='text-3xl mt-20'>Login</h1>
            <input className='bg-slate-700 text-white my-2' required onChange={inputValues} value={value.name} type="text" name='name' placeholder='Enter Admin Name...' />
            <input className='bg-slate-700 text-white my-2' required onChange={inputValues} value={value.email} type="email" name='email' placeholder=' Enter Admin Email...' />
            <input className='bg-slate-700 text-white my-2' required onChange={inputValues} value={value.password} type="password" name='password' placeholder='Enter Admin Password...' />
            <button className='p-2 text-2xl bg-slate-700'>Login</button>
            {error}
        </form>
    </div>
  )
}

export default Login