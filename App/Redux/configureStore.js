import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import tilawasReducer from './reducers/tilawas';

const rootReducer = combineReducers({
	auth: authReducer , 
	tilawas : tilawasReducer 
});

const configureStore = () => {
	// return createStore();
	return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
