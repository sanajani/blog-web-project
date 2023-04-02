
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {sidebar} from '../features/sideBarSlicer';

const Sidebar = () => {
      const isSide = useSelector((state) => state.isSide.sidebarValue);
      const dispatch = useDispatch();

  return (
    // <div className={isSide?'side active':'side'}>
    <div className={`h-screen w-full bg-white text-black duration-500 dark:text-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 fixed top-0 ${isSide ? 'right-0 opacity-100 overflow-visible z-50' : '-right-96 overflow-hidden opacity-0'}`}>
        <div className="bg-red-900 w-8 h-8 rounded-md cursor-pointer" onClick={() => dispatch(sidebar())}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="w-full h-screen flex justify-center items-center flex-col ">
        <Link className='my-4 text-2xl w-full text-center py-10' to="/" onClick={() => dispatch(sidebar())}>Home</Link>
        <Link className='my-4 text-2xl w-full text-center py-10' to="/about" onClick={() => dispatch(sidebar())}>About</Link>
        </div>
   </div>
  )
}

export default Sidebar