import {takeLatest} from 'redux-saga/effects'
import {actionTypes as usersActions} from '../redux/index';

import tryUsersList from '../redux/users/saga'

export default function* rootSaga() {
    yield takeLatest(usersActions.LIST_TRY, tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
    // yield takeLatest('TRY_LIST', tryUsersList);
}