import { TestBed } from "@angular/core/testing";

import { AlertService } from "./alert.service";
import { provideMockStore } from "@ngrx/store/testing";
import { IAlertState } from "../models";

describe("AlertService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        AlertService,
        provideMockStore<IAlertState>({
        }),
      ],
    })
  );

  it("should be created", async () => {
    const service: AlertService = TestBed.get(AlertService);
    await expect(service).toBeTruthy();
  });
});
