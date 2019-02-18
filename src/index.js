// eslint-disable-next-line
/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/sass/materialize.scss'
import 'materialize-css/dist/js/materialize.min.js'
import './index.scss';


import App from './App';
import * as serviceWorker from './serviceWorker';


import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import { reactReduxFirebase ,getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';



const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady: true})
    )
    );


store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
});