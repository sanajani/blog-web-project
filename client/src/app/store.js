import {configureStore} from '@reduxjs/toolkit';
import sideBarReducer from '../features/sideBarSlicer';
import blogSlicer from '../features/isBlog';
import adminLoggedinReducer from '../features/isLogin';
import darkMoodReducer from '../features/dark_light';

const store = configureStore({
    reducer:{
        isSide: sideBarReducer,
        isBlog: blogSlicer,
        isAdmin: adminLoggedinReducer,
        darkMood: darkMoodReducer
    }
})

export default store