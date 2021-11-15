import { Injectable } from "@angular/core";
import { AlertType, IAlertState } from "../models";
import { Store } from "@ngrx/store";
import { AddAlertAction } from "../actions";
import { v4 as uuidv4 } from "uuid";
import { ScrollingService } from "src/app/core/services/scrolling.service";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  public constructor(
    private readonly _store: Store<IAlertState>,
    private readonly _scrollingService: ScrollingService
  ) {}

  public error(message: string, description: string): void {
    this.createAlert(description, message, "error");
  }

  public success(message: string, description: string): void {
    this.createAlert(description, message, "success");
  }

  public warning(message: string, description: string): void {
    this.createAlert(description, message, "warning");
  }

  public info(message: string, description: string): void {
    this.createAlert(description, message, "info");
  }

  private createAlert(
    description: string,
    message: string,
    type: AlertType
  ): void {
    this._store.dispatch(
      new AddAlertAction({
        alert: {
          description,
          message,
          type,
          id: uuidv4(),
        },
      })
    );
    this._scrollingService.scrollToTop();
  }
}
