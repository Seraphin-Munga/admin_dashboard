import { LoadAlertsAction } from "./load-alerts.action";
import { AddAlertAction } from "./add-alert.action";
import { UpsertAlertAction } from "./upsert-alert.action";
import { AddAlertsAction } from "./add-alerts.action";
import { UpsertAlertsAction } from "./upsert-alerts.action";
import { UpdateAlertAction } from "./update-alert.action";
import { UpdateAlertsAction } from "./update-alerts.action";
import { DeleteAlertAction } from "./delete-alert.action";
import { DeleteAlertsAction } from "./delete-alerts.action";
import { ClearAlertsAction } from "./clear-alerts.action";

export type AlertReducerAction =
  | LoadAlertsAction
  | AddAlertAction
  | UpsertAlertAction
  | AddAlertsAction
  | UpsertAlertsAction
  | UpdateAlertAction
  | UpdateAlertsAction
  | DeleteAlertAction
  | DeleteAlertsAction
  | ClearAlertsAction;
