import { createStore ,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../Reducers';
import sagas from '../Saga';

// const createStore = createStore;
let sagaMiddleware;

sagaMiddleware = createSagaMiddleware();
	
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);


export default store;