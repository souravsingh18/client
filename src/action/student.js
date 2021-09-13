import * as api from '../api/student'

export const getStudentCounts = ()=> async (dispatch)=>{
    try {
        const {data} = await api.getCounts();

        dispatch({type:"COUNT",payload: data});
    } catch (err) {
        console.log(err);
    }
}

export const getAll = ()=> async (dispatch)=>{
    try {
        const {data} = await api.getAll();

        dispatch({type:"GET_ALL_STUDENTS",payload: data});
    } catch (err) {
        console.log(err);
    }
}
