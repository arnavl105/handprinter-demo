import { combineReducers } from 'redux';
import { timer } from './timer';
import { actionIdeas } from './actionIdea';

export default combineReducers({
	timer,
	actionIdeas
})