import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";

export class DeleteAlertsAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.DeleteAlerts;

  public constructor(public payload: { ids: Array<string> }) {}
}
