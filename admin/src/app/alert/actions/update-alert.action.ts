import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";
import { Update } from "@ngrx/entity";
import { IAlert } from "../models";

export class UpdateAlertAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.UpdateAlert;

  public constructor(public payload: { alert: Update<IAlert> }) {}
}
