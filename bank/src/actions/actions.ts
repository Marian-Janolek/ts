import { ActionTypes } from '../action-types';

interface DepositAction {
  type: ActionTypes.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: ActionTypes.WITHDRAW;
  payload: number;
}
interface BankroptAction {
  type: ActionTypes.BANKROPT;
}

export type ActionType = DepositAction | WithdrawAction | BankroptAction;
