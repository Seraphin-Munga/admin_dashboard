import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";

export class ClearAlertsAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.ClearAlerts;
}
