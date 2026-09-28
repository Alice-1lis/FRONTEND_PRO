import { TOGGLE_FAVORITE } from './favoritesActions';

const initialState = {
  list: [],
};
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const exists = state.list.some((h) => h.id === action.payload.id);
      return {
        ...state,
        list: exists
          ? state.list.filter((h) => h.id !== action.payload.id)
          : [...state.list, action.payload],
      };
    }
    default:
      return state;
  }
};

export default favoritesReducer;