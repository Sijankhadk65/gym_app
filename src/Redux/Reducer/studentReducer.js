import { ADD_STUDENT } from "../Actions/actionTypes";

function studentReducer(state = [], action) {
  switch (action.type) {
    case ADD_STUDENT:
      action.student.id = state === [] ? 1 : state.length + 1;
      return [...state, action.student];

    default:
      return state;
  }
}

export default studentReducer;
