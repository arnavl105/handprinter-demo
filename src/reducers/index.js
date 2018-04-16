import { combineReducers } from 'redux';
import { timer } from './timer';
import { actionIdea } from './actionIdea';

export default combineReducers({
	timer,
	actionIdea
})