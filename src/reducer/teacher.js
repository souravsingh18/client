export const teacherReducer = (state={courseCount:null,teachers:[]},action)=>{
    switch (action.type) {
        case "GET_ALL_TEACHERS":
                return {...state,teachers: action.payload};
        case "TEACHERS_COUNT":
                // console.log("RED",action.payload.result[0].totalStudents);
                return {...state,teacherCount: action?.payload?.result[0]?.totalTeachers};
        default:
            return state;
    }
}
