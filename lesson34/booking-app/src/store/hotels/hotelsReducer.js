import {
  SEARCH_HOTELS_REQUEST,
  SEARCH_HOTELS_SUCCESS,
  SEARCH_HOTELS_FAILURE,
  RESET_HOTELS_STATUS,
} from "./hotelsActions";

const initialState = {
  list: [],
  loading: false,
  error: null,
  status: "idle",
  searchParams: null,
};
const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        status: "loading",
        searchParams: action.payload,
      };
    case SEARCH_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "success",
        list: action.payload,
      };
    case SEARCH_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        status: "error",
        error: action.payload,
      };
    case RESET_HOTELS_STATUS:
      return { ...state, status: "idle" };
    default:
      return state;
  }
};

export default hotelsReducer;
