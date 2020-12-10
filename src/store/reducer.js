import {combineReducers} from 'redux';

export const addresses = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      console.log(state);
      // ### Comment for debug mode to test
      if ((state[0] && state[0].ip) != action.data.ip) {
        state.unshift(action.data);
      }
      // ### Use this to run in debug mode
      // if((state[0] && state[0].time)!=action.data.time){
      //   state.unshift(action.data)
      // }
      return state;
    default:
      return state;
  }
};

export const reducers = combineReducers({addresses});
