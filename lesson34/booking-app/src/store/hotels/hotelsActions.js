export const SEARCH_HOTELS_REQUEST = "SEARCH_HOTELS_REQUEST";
export const SEARCH_HOTELS_SUCCESS = "SEARCH_HOTELS_SUCCESS";
export const SEARCH_HOTELS_FAILURE = "SEARCH_HOTELS_FAILURE";
export const RESET_HOTELS_STATUS = "RESET_HOTELS_STATUS";

export const searchHotelsRequest = (payload) => ({
  type: SEARCH_HOTELS_REQUEST,
  payload,
});
export const searchHotelsSuccess = (hotels) => ({
  type: SEARCH_HOTELS_SUCCESS,
  payload: hotels,
});
export const searchHotelsFailure = (error) => ({
  type: SEARCH_HOTELS_FAILURE,
  payload: error,
});
export const resetHotelsStatus = () => ({
  type: RESET_HOTELS_STATUS,
});
