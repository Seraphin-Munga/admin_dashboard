import { AlertActionType } from "./alert.action-type";
import { IAlert } from "../models";
import { TypedAction } from "@ngrx/store/src/models";

export class LoadAlertsAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.LoadAlerts;

  public constructor(public payload: { alerts: Array<IAlert> }) {}
}
