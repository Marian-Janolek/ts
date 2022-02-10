import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';
import { ActionType } from '../actions/actions';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    });
  };
};
export const bankroptMoney = () => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionTypes.BANKROPT,
    });
  };
};
