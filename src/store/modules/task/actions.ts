import { action } from "typesafe-actions";
import { ActionTypes } from "./consts";
import { Device } from "./types";

export function remove(id: string) {
  return action(ActionTypes.TASK_DELETE_REQUEST, id);
}

export function list() {
  return action(ActionTypes.TASK_LIST_REQUEST);
}

export function add(payload: any) {
  return action(ActionTypes.TASK_ADD_REQUEST, payload);
}

export function find(id: string) {
  return action(ActionTypes.TASK_FIND_REQUEST, id);
}

export function update(payload: Device) {
  return action(ActionTypes.TASK_UPDATE_REQUEST, payload);
}
