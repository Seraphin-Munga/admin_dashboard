import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { IAlert, IAlertState } from "../../models";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { selectAll } from "../../selectors";
import { DeleteAlertAction } from "../../actions";

@Component({
  selector: "app-alert-panel",
  templateUrl: "./alert-panel.component.html",
  styleUrls: ["./alert-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertPanelComponent implements OnInit {
  public alerts$!: Observable<Array<IAlert>>;

  public constructor(private readonly _store: Store<IAlertState>) {}

  public ngOnInit(): void {
    this.alerts$ = this._store.pipe(select(selectAll));
  }

  public afterClose(id: string): void {
    this._store.dispatch(new DeleteAlertAction({ id }));
  }
}
