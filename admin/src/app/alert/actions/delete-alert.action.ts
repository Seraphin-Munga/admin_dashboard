import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";

export class DeleteAlertAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.DeleteAlert;

  public constructor(public payload: { id: string }) {}
}
