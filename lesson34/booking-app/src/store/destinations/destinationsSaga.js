import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axiosInstance";
import {
  FETCH_DESTINATIONS_REQUEST,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
} from "./destinationsActions";

function* fetchDestinationsWorker() {
  try {
    const response = yield call(axiosInstance.get, "/destinations");
    yield put(fetchDestinationsSuccess(response.data));
  } catch (error) {
    yield put(fetchDestinationsFailure(error.message));
  }
}

export function* destinationsSaga() {
  yield takeLatest(FETCH_DESTINATIONS_REQUEST, fetchDestinationsWorker);
}
