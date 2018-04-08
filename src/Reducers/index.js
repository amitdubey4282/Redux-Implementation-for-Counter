import { combineReducers } from 'redux';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../Actions';

function handlecount(state = { count: 0 }, action) {
  const { count } = action;
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + count,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - count,
      };
    default:
      return state;
  }
}

export default handlecount;
