import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

const innitialState = [{}];

export default function(state = initialsState, action){

  const { type, payload } = action;

  switch(type){
    case SET_ALERT:
      //state is immutable therefore: ...state -> bring all states
      return [...state, payload];
    case REMOVE_ALERT:
      //state is an array
      //here payload is just the id
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}