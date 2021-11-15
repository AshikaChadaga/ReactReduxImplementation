import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';


const SELL_CAKE = 'SELL_CAKE';
const PRODUCE_CAKE = 'PRODUCE_CAKE';

//action
const sellCake = () => {
  return {
    type: SELL_CAKE,
    info: 'Sell cake Redux Action'
  }
}

const produceCake = () => {
  return {
    type: PRODUCE_CAKE,
    info: 'Produce Cake Redux Action'
  }
}

//state
const initialState = {
  numberOfCakes: 10
}

//reducer
const cakeReducer = (state = initialState, action) => {
  switch(action.type){
    case SELL_CAKE: return{
      ...state, //create copy of state
      numberOfCakes: state.numberOfCakes - 1
    }
    case PRODUCE_CAKE: return{
      ...state,
      numberOfCakes: state.numberOfCakes + 1
    }
    default: return state
  }
}

//store
const store = createStore(cakeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//getState - current state in store
console.log("Initial state", store.getState());

//subscribe - subscribe to changes made to store
const unsubscribe = store.subscribe(()=> {
  console.log("Updated State", store.getState());
})

//Dispatch - To update state
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(produceCake());
unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
