export const FETCH_DESTINATIONS_REQUEST = "FETCH_DESTINATIONS_REQUEST";
export const FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS";
export const FETCH_DESTINATIONS_FAILURE = "FETCH_DESTINATIONS_FAILURE";

export const fetchDestinationsRequest = () => ({
  type: FETCH_DESTINATIONS_REQUEST,
});

export const fetchDestinationsSuccess = (destinations) => ({
  type: FETCH_DESTINATIONS_SUCCESS,
  payload: destinations,
});

export const fetchDestinationsFailure = (error) => ({
  type: FETCH_DESTINATIONS_FAILURE,
  payload: error,
});
