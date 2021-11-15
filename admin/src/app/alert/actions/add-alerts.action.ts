import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";
import { IAlert } from "../models";

export class AddAlertsAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.AddAlerts;

  public constructor(public payload: { alerts: Array<IAlert> }) {}
}
