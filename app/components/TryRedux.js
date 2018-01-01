import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';


const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  heroes: []
};

const reducer = function(state=initialState, action){
  switch (action.type) {
    case 'FETCH_HEROES_PENDING':
      return {...state, fetching: true};
      break;
    case 'FETCH_HEROES_FULFILLED':
      return {...state, fetching: false, fetched: true, heroes: action.payload};
      break;
    case 'FETCH_HEROES_REJECTED':
      return {...state, fetching: false, error: action.payload};
      break;
    default:

  }

  return state;
}

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(reducer, middleware);

store.subscribe(()=>{
  console.log('current state = ', store.getState());
})


store.dispatch({
  type: 'FETCH_HEROES',
  payload: axios.get('http://rest.learncode.academy/api/radiegtya/heroes')
})
// store.dispatch((dispatch)=> {
//   dispatch({type: 'FETCH_HEROES_PENDING'});
//   axios.get('http://rest.learncodexxx.academy/api/radiegtya/heroes')
//     .then((response)=>{
//       dispatch({type: 'FETCH_HEROES_FULFILLED', payload: response.data});
//     })
//     .catch((err)=> {
//       dispatch({type: 'FETCH_HEROES_REJECTED', payload: err});
//     })
// });
