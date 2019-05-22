import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
	auth: authReducer
});

const configureStore = () => {
	// return createStore();
	return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
