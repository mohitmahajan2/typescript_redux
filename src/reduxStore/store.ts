import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

// function saveToLocalStorage(state) {
//     try {
//       const serialisedState = JSON.stringify(state);
//       localStorage.setItem("persistantState", encryptData(state));
//     } catch (e) {
//       console.warn(e);
//     }
//   }

// function loadFromLocalStorage() {
//     try {
//       const serialisedState = localStorage.getItem("persistantState");

//       if (serialisedState === null) return undefined;
//       return JSON.parse(getUTFStr(decryptData(serialisedState.toString())));
//       // return JSON.parse((serialisedState.toString()));
//     } catch (e) {
//       console.warn(e);
//       return undefined;
//     }
//   }

const middleware = [thunk]

const store = createStore(rootReducer,  
  // loadFromLocalStorage(),
   composeWithDevTools(applyMiddleware(...middleware)))

// store.subscribe(() => saveToLocalStorage(store.getState()));
store.subscribe(() => (store.getState()));
export default store;