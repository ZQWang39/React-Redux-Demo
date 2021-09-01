import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'



// //actions ->Increment, decrement
//   const increment = ()=>{
//     return{
//       type:'INCREMENT'
//     }
//   }

//   const decrement = ()=>{
//     return{
//       type:'DECREMENT'
//     }
//   }
// //reducer
// const counter = (state = 0, action)=>{
//    switch(action.type){
//      case 'INCREMENT':
//        return state +1;
//        case 'DECREMENT':
//        return state -1;
//        default:
//          return state;
//    }
// }
// // store -> Globalized state

// let store = createStore(counter)

// //display it in the console
// store.subscribe(()=> console.log(store.getState()))

// //dispatch -> dispatch actions
// store.dispatch(increment())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
