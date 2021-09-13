import {combineReducers} from 'redux'

import { studentReducer } from './student';
import { courseReducer } from './course';
import { teacherReducer } from './teacher';

const reducers = combineReducers({
    studentReducer,
    courseReducer,
    teacherReducer
});

export default reducers;