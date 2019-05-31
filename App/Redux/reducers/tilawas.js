import { SET_TILAWAS } from "../actions/actionTypes";

const initialState = {
    data : [] 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TILAWAS:
      return {
        ...state,
        data: action.tilawas,
      };
    default:
      return state;
  }
};

export default reducer;
