import * as api from '../api/course'

export const getCoursesCounts = ()=> async (dispatch)=>{
    try {
        const {data} = await api.getCounts();

        dispatch({type:"COURSE_COUNT",payload: data});
    } catch (err) {
        console.log(err);
    }
}

export const getAllCourses = ()=> async (dispatch)=>{
    try {
        const {data} = await api.getAll();

        dispatch({type:"COURSE_GET_ALL",payload: data});
    } catch (err) {
        console.log(err);
    }
}
