import { SET_TILAWAS , SET_TILAWAS_SEARCH} from "../actions/actionTypes";

const initialState = {
    data : [] ,
    seach :  []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TILAWAS:
      return {
        ...state,
        data: action.tilawas,
      };
    case SET_TILAWAS_SEARCH :
      return {
        ...state,
        search: action.tilawas,
      };
    default:
      return state;
  }
};

export default reducer;
