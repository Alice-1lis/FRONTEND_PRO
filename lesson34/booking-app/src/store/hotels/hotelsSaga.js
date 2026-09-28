import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axiosInstance";
import {
  SEARCH_HOTELS_REQUEST,
  searchHotelsSuccess,
  searchHotelsFailure,
} from "./hotelsActions";

function* searchHotelsWorker(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/hotels/search",
      action.payload,
    );
    yield put(searchHotelsSuccess(response.data));
  } catch (error) {
    yield put(searchHotelsFailure(error.message));
  }
}

export function* hotelsSaga() {
  yield takeLatest(SEARCH_HOTELS_REQUEST, searchHotelsWorker);
}
