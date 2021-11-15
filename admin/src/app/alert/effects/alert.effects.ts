import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { AddAlertAction, AlertActionType, DeleteAlertAction } from "../actions";

@Injectable({
  providedIn: "root",
})
export class AlertEffects {
  @Effect()
  /* eslint-disable no-invalid-this */
  public addAlert: Observable<DeleteAlertAction> = this._actions$.pipe(
    ofType(AlertActionType.AddAlert),
    debounceTime(10000),
    map((action: AddAlertAction) => {
      return new DeleteAlertAction({ id: action.payload.alert.id });
    })
  );
  public constructor(private readonly _actions$: Actions) { }
}
