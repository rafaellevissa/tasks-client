export interface ActionTypesBase {
  TASK_DELETE_REQUEST: string;
  TASK_DELETE_SUCCESS: string;
  TASK_DELETE_FAILURE: string;

  TASK_LIST_REQUEST: string;
  TASK_LIST_SUCCESS: string;
  TASK_LIST_FAILURE: string;

  TASK_ADD_REQUEST: string;
  TASK_ADD_SUCCESS: string;
  TASK_ADD_FAILURE: string;

  TASK_FIND_REQUEST: string;
  TASK_FIND_SUCCESS: string;
  TASK_FIND_FAILURE: string;

  TASK_UPDATE_REQUEST: string;
  TASK_UPDATE_SUCCESS: string;
  TASK_UPDATE_FAILURE: string;
}

export interface Device {
  id: number;
  name?: string;
  topic?: string;
  created_at?: string;
  updated_at?: string;
}

export interface StateBase {
  item: string | Device | Device[] | null;
  itemEdit: string | Device | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: string | Device | null;
  meta: any;
  error: any;
}
