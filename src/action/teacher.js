import * as api from '../api/teacher'

export const getTeachersCounts = ()=> async (dispatch)=>{
    try {
        const {data} = await api.getCounts();

        dispatch({type:"TEACHERS_COUNT",payload: data});
    } catch (err) {
        console.log(err);
    }
}

export const getAllTeachers = ()=> async (dispatch)=>{
    try {
        const {data} = await api.getAll();
        console.log(data);
        dispatch({type:"GET_ALL_TEACHERS",payload: data});
    } catch (err) {
        console.log(err);
    }
}
