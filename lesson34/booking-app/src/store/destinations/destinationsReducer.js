import {
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
} from "./destinationsActions";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const destinationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESTINATIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DESTINATIONS_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case FETCH_DESTINATIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default destinationsReducer;
