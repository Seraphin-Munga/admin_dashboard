import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";
import { Update } from "@ngrx/entity";
import { IAlert } from "../models";

export class UpdateAlertsAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.UpdateAlerts;

  public constructor(public payload: { alerts: Array<Update<IAlert>> }) {}
}
