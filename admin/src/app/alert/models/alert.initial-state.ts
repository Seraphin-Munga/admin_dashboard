import { IAlertState } from "./alert.state";
import { alertAdapter } from "../adapters";

export const alertInitialState: IAlertState = alertAdapter.getInitialState({
  entities: [],
  ids: [],
});
