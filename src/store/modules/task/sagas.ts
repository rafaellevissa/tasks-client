import type { Action, Device } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";

export function* add({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.post, "/task", payload);

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 201) {
      throw response;
    }

    yield put({
      type: ActionTypes.TASK_ADD_SUCCESS,
      payload: data,
    });

    window.location.reload();
  } catch (failed) {
    yield put({
      type: ActionTypes.TASK_ADD_FAILURE,
      payload: null,
    });
  }
}

export function* find({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.get, "/task/" + payload);

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.TASK_FIND_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.TASK_FIND_FAILURE,
      payload: null,
    });
  }
}

export function* list({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.get, "/task");

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.TASK_LIST_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.TASK_LIST_FAILURE,
      payload: null,
    });
  }
}

export function* remove({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.delete, "/task/" + payload);

    const { data, status } = response as AxiosResponse<any>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.TASK_DELETE_SUCCESS,
      payload: data,
    });

    window.location.reload();
  } catch (failed) {
    yield put({
      type: ActionTypes.TASK_DELETE_FAILURE,
      payload: null,
    });
  }
}

export function* update({ payload }: Action): Generator {
  try {
    const request = payload as Device;

    const { id, ...requestPayload } = request;
    const response: unknown = yield call(
      api.put,
      "/task/" + id,
      requestPayload
    );

    const { data, status } = response as AxiosResponse<Device>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.TASK_UPDATE_SUCCESS,
      payload: data,
    });

    window.location.reload();
  } catch (failed) {
    yield put({
      type: ActionTypes.TASK_UPDATE_FAILURE,
      payload: null,
    });
  }
}

export default all([
  takeLatest(ActionTypes.TASK_DELETE_REQUEST, remove),
  takeLatest(ActionTypes.TASK_LIST_REQUEST, list),
  takeLatest(ActionTypes.TASK_ADD_REQUEST, add),
  takeLatest(ActionTypes.TASK_FIND_REQUEST, find),
  takeLatest(ActionTypes.TASK_UPDATE_REQUEST, update),
]);
