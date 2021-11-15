import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';


const SELL_CAKE = 'SELL_CAKE';
const PRODUCE_CAKE = 'PRODUCE_CAKE';
const SELL_MUFFINS = 'SELL_MUFFINS';
const PRODUCE_MUFFINS = 'PRODUCE_MUFFINS';

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

const sellMuffins = () => {
  return {
    type: SELL_MUFFINS,
    info: 'Sell Muffins Redux Action'
  }
}

const produceMuffins = () => {
  return {
    type: PRODUCE_MUFFINS,
    info: 'Produce Muffins Redux Action'
  }
}

//state
const initialCakeState = {
  numberOfCakes: 10
}
const initialMuffinsState = {
  numberOfMuffins: 20
}

//reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case SELL_CAKE: return {
      ...state, //create copy of state
      numberOfCakes: state.numberOfCakes - 1
    }
    case PRODUCE_CAKE: return {
      ...state,
      numberOfCakes: state.numberOfCakes + 1
    }
    default: return state
  }
}
const muffinsReducer = (state = initialMuffinsState, action) => {
  switch (action.type) {
    case SELL_MUFFINS: return {
      ...state,
      numberOfMuffins: state.numberOfMuffins - 1
    }
    case PRODUCE_MUFFINS: return {
      ...state,
      numberOfMuffins: state.numberOfMuffins + 1
    }
    default: return state
  }
}

//combine reducers
const allReducers = combineReducers({
  cake: cakeReducer,
  muffins: muffinsReducer
})

//store
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//getState - current state in store
console.log("Initial state", store.getState());

//subscribe - subscribe to changes made to store
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
})

//Dispatch - To update state
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(produceCake());

store.dispatch(sellMuffins());
store.dispatch(sellMuffins());
store.dispatch(sellMuffins());
store.dispatch(sellMuffins());
store.dispatch(produceMuffins());
unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <button onClick={store.dispatch(sellCake())}>
      Sell Cake
    </button>
    <button onClick={store.dispatch(produceCake())}>
      Make Cake
    </button> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
