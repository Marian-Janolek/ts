import { ActionTypes } from '../action-types';
import { ActionType } from '../actions/actions';

const initialState = 0;

const reducer = (state: number = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;
    case ActionTypes.WITHDRAW:
      return state - action.payload;
    case ActionTypes.BANKROPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
