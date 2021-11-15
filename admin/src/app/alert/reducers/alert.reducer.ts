import { AlertReducerAction } from "../actions";
import { IAlert, IAlertState } from "../models";
import { alertInitialState } from "../models";
import { AlertActionType } from "../actions";
import { AddAlertAction } from "../actions";
import { UpsertAlertAction } from "../actions";
import { AddAlertsAction } from "../actions";
import { UpsertAlertsAction } from "../actions";
import { UpdateAlertAction } from "../actions";
import { UpdateAlertsAction } from "../actions";
import { DeleteAlertAction } from "../actions";
import { DeleteAlertsAction } from "../actions";
import { alertAdapter } from "../adapters";
import { Update } from "@ngrx/entity";

export const alertReducer = (
  state: IAlertState = alertInitialState,
  action: AlertReducerAction,
  alert: IAlert,
  alerts: Array<IAlert>,
  alertUpdate: Update<IAlert>,
  alertUpdates: Array<Update<IAlert>>,
  id: string,
  ids: Array<string>
): IAlertState => {
  switch (action.type) {
    case AlertActionType.AddAlert: {
      return alertAdapter.addOne(
        action instanceof AddAlertAction ? action.payload.alert : alert,
        state
      );
    }
    case AlertActionType.UpsertAlert: {
      return alertAdapter.upsertOne(
        action instanceof UpsertAlertAction ? action.payload.alert : alert,
        state
      );
    }
    case AlertActionType.AddAlerts: {
      return alertAdapter.addMany(
        action instanceof AddAlertsAction ? action.payload.alerts : alerts,
        state
      );
    }
    case AlertActionType.UpsertAlerts: {
      return alertAdapter.upsertMany(
        action instanceof UpsertAlertsAction ? action.payload.alerts : alerts,
        state
      );
    }
    case AlertActionType.UpdateAlert: {
      return alertAdapter.updateOne(
        action instanceof UpdateAlertAction
          ? action.payload.alert
          : alertUpdate,
        state
      );
    }
    case AlertActionType.UpdateAlerts: {
      return alertAdapter.updateMany(
        action instanceof UpdateAlertsAction
          ? action.payload.alerts
          : alertUpdates,
        state
      );
    }
    case AlertActionType.DeleteAlert: {
      return alertAdapter.removeOne(
        action instanceof DeleteAlertAction ? action.payload.id : id,
        state
      );
    }
    case AlertActionType.DeleteAlerts: {
      return alertAdapter.removeMany(
        action instanceof DeleteAlertsAction ? action.payload.ids : ids,
        state
      );
    }
    // case AlertActionType.LoadAlerts: {
    //     return alertAdapter.addAll(action instanceof LoadAlertsAction ? action.payload.alerts : null, state);
    // }
    case AlertActionType.ClearAlerts: {
      return alertAdapter.removeAll(state);
    }
    default: {
      return state;
    }
  }
};
