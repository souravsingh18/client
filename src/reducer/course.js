export const courseReducer = (state={courseCount:null,courses:[]},action)=>{
    switch (action.type) {
        case "COURSE_GET_ALL":
                return {...state,courses: action.payload};
        case "COURSE_COUNT":
                // console.log("RED",action.payload.result[0].totalcourses);
                return {...state,courseCount: action.payload.result[0].totalCourses};
        default:
            return state;
    }
}
