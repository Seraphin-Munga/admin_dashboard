import { alertReducer } from "./alert.reducer";
import { AlertReducerAction } from "../actions";
import { alertInitialState } from "../models";

describe("Alert Reducer", () => {
  describe("unknown action", () => {
    it("should return the previous state", async () => {
      const action = {} as AlertReducerAction;

      const result = alertReducer(alertInitialState, action);

      await expect(result).toBe(alertInitialState);
    });
  });
});
