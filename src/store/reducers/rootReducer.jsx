import authReducer from './authReducer';
import jobsReducer from './jobsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;