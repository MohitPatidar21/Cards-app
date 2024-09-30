import { createStore, combineReducer } from 'redux';
import postsReducer from './reducers/postsReducer';

const rootReducer = combineReducer({
    posts: postsReducer,
});

const store = createStore(rootReducer);

export default store;