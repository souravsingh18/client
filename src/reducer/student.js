export const studentReducer = (
  state = { studentCount: null, students: [] },
  action
) => {
  switch (action.type) {
    case "GET_ALL_STUDENTS":
      return { ...state, students: action.payload.result };
    case "COUNT":
      // console.log("RED",action.payload.result[0].totalStudents);
      return { ...state, studentCount: action.payload.result[0].totalStudents };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((el) => el._id !== action.payload),
      };
    default:
      return state;
  }
};
