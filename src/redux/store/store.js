import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { ingredientsReducers } from '../reducers/ingredientsReducer';
import { loginReducers } from '../reducers/loginReducers';
import { registerReducers } from '../reducers/registerReducers';

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    ingredients: ingredientsReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)