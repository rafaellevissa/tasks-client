import produce from "immer";

import type { Action, StateBase } from "./types";

import { ActionTypes, InitialState } from "./consts";

function reducer(state = InitialState, action: Action): StateBase {
  switch (action.type) {
    case ActionTypes.TASK_DELETE_REQUEST:
    case ActionTypes.TASK_LIST_REQUEST:
    case ActionTypes.TASK_ADD_REQUEST:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = true;
        draft.error = false;
      });
    case ActionTypes.TASK_DELETE_SUCCESS:
    case ActionTypes.TASK_LIST_SUCCESS:
    case ActionTypes.TASK_ADD_SUCCESS:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case ActionTypes.TASK_DELETE_FAILURE:
    case ActionTypes.TASK_LIST_FAILURE:
    case ActionTypes.TASK_ADD_FAILURE:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = true;
      });
    case ActionTypes.TASK_FIND_REQUEST:
    case ActionTypes.TASK_UPDATE_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
        draft.itemEdit = action.payload;
      });
    case ActionTypes.TASK_FIND_SUCCESS:
    case ActionTypes.TASK_UPDATE_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = false;
        draft.itemEdit = action.payload;
      });
    case ActionTypes.TASK_FIND_FAILURE:
    case ActionTypes.TASK_UPDATE_FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
        draft.itemEdit = action.payload;
      });
    default:
      return state;
  }
}

export default reducer;
