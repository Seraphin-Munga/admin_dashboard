import { AlertType } from "./alert-type.model";

export interface IAlert {
  id: string;
  message: string;
  description: string;
  type: AlertType;
}
