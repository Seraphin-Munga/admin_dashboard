import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";
import { IAlert } from "../models";

export class UpsertAlertsAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.UpsertAlerts;

  public constructor(public payload: { alerts: Array<IAlert> }) {}
}
