import { FETCH_ERRORE, FETCH_REQUEST, FETCH_SUCCESS, SEARCH_ERRORE, SEARCH_REQUEST, SEARCH_SUCCESS } from "../../constraints/actionType";

//initial state
const ListsState = {
  loading: false,
  // in case errore response from api
  error: "",
  lists: [],
};

//reducers
export const postsReducer = (state = ListsState, action: any) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    //success
    case FETCH_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        loading: false,
      };
    //error
    case FETCH_ERRORE:
      return {
        ...state,
        lists: [],
        error: action.payload,
        loading: false,
      };
    //========SEARCH SINGLE LIST =======
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        lists: [action.payload],
        loading: false,
      };
    case SEARCH_ERRORE:
      return {
        ...state,
        lists: [],
        error: action.payload,
        loading: false,
      };
    //return default state
    default:
      return state;
  }
};
