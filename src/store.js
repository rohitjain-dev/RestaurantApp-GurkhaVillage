import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from './Promise';
import reducer from './reducers';

export default function configureStore(){
	const enhancer = compose(
		applyMiddleware(
			thunk,
			promise
		)
	);

	const store = createStore(reducer, enhancer);
	return store;
}