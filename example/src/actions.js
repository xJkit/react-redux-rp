import { INC_COUNT, DESC_COUNT } from './ActionTypes';

export const increment = () => ({
  type: INC_COUNT
});

export const decrement = () => ({
  type: DESC_COUNT
});
