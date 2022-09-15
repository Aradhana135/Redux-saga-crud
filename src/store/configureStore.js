import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from  'redux-saga';

import createRootReducer from './rootReducers';
import rootSaga from './rootSaga';


export default function configureStore({initialState}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(createRootReducer(), composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return {store}
}