export const DEFAULT_STATE = 'DEFAULT_STATE';
export const IS_LOADING = 'CARGANDO_RECURSO';

interface IDefaultState {
  type: typeof DEFAULT_STATE;
  payload: boolean;
}

interface IIsLoadingAction {
  type: typeof IS_LOADING;
  payload: boolean;
}

export type IActionTypesMain = IDefaultState | IIsLoadingAction;
