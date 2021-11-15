import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AlertPanelComponent } from "./alert-panel.component";
import { provideMockStore } from "@ngrx/store/testing";
import { alertInitialState, IAlertState } from "../../models";
import { Store } from "@ngrx/store";
import { selectAll } from "../../selectors";

describe("AlertPanelComponent", () => {
  let component: AlertPanelComponent;
  let fixture: ComponentFixture<AlertPanelComponent>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertPanelComponent],
      providers: [
        provideMockStore<IAlertState>({
          initialState: alertInitialState,
        }),
      ],
    }).compileComponents();
    const store = TestBed.get<Store<IAlertState>>(Store);
    store.overrideSelector(selectAll, []);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async () => {
    await expect(component).toBeTruthy();
  });
});
