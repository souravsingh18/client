export const courseReducer = (state={courseCount:null,courses:[]},action)=>{
    switch (action.type) {
        case "GET_ALL_COURSE":
                return {...state,courses: action.payload.result};
        case "COURSE_COUNT":
                // console.log("RED",action.payload.result[0].totalcourses);
                return {...state,courseCount: action.payload.result[0].totalCourses};
        default:
            return state;
    }
}
