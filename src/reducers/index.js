import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import articlesReducer from './articlesReducer';

export default combineReducers({
  projects: projectReducer,
  articles: articlesReducer,
});
