import { all, fork } from "redux-saga/effects";
import { destinationsSaga } from "./destinations/destinationsSaga";
import { hotelsSaga } from "./hotels/hotelsSaga";

export default function* rootSaga() {
  yield all([fork(destinationsSaga), fork(hotelsSaga)]);
}
