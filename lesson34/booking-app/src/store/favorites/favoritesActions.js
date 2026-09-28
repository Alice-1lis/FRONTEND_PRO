export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (hotel) => ({
  type: TOGGLE_FAVORITE,
  payload: hotel,
});