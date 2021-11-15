import { TypedAction } from "@ngrx/store/src/models";
import { AlertActionType } from "./alert.action-type";
import { IAlert } from "../models";

export class UpsertAlertAction implements TypedAction<AlertActionType> {
  public readonly type: AlertActionType = AlertActionType.UpsertAlert;

  public constructor(public payload: { alert: IAlert }) {}
}
