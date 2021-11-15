import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable, of } from "rxjs";

import { AlertEffects } from "./alert.effects";
import { AlertActionType } from "../actions";

describe("AlertEffects", () => {
  const actions$: Observable<AlertActionType> = of(AlertActionType.AddAlert);
  let effects: AlertEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.get<AlertEffects>(AlertEffects);
  });

  it("should be created", async () => {
    await expect(effects).toBeTruthy();
  });
});
