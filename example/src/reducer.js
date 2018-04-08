import { INC_COUNT, DESC_COUNT } from './ActionTypes';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNT:
      return {
        count: state.count + 1
      };
    case DESC_COUNT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};
