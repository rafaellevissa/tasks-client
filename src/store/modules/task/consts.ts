import type { ActionTypesBase, StateBase } from "./types";

export const ActionTypes: ActionTypesBase = {
  TASK_DELETE_REQUEST: "@oauth/TASK_DELETE_REQUEST",
  TASK_DELETE_SUCCESS: "@oauth/TASK_DELETE_SUCCESS",
  TASK_DELETE_FAILURE: "@oauth/TASK_DELETE_FAILURE",

  TASK_LIST_REQUEST: "@oauth/TASK_LIST_REQUEST",
  TASK_LIST_SUCCESS: "@oauth/TASK_LIST_SUCCESS",
  TASK_LIST_FAILURE: "@oauth/TASK_LIST_FAILURE",

  TASK_ADD_REQUEST: "@oauth/TASK_ADD_REQUEST",
  TASK_ADD_SUCCESS: "@oauth/TASK_ADD_SUCCESS",
  TASK_ADD_FAILURE: "@oauth/TASK_ADD_FAILURE",

  TASK_FIND_REQUEST: "@oauth/TASK_FIND_REQUEST",
  TASK_FIND_SUCCESS: "@oauth/TASK_FIND_SUCCESS",
  TASK_FIND_FAILURE: "@oauth/TASK_FIND_FAILURE",

  TASK_UPDATE_REQUEST: "@oauth/TASK_UPDATE_REQUEST",
  TASK_UPDATE_SUCCESS: "@oauth/TASK_UPDATE_SUCCESS",
  TASK_UPDATE_FAILURE: "@oauth/TASK_UPDATE_FAILURE",
};

export const InitialState: StateBase = {
  item: null,
  itemEdit: null,
  error: false,
  loading: false,
};
