import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { IAlert } from "../models";

export const alertAdapter: EntityAdapter<IAlert> = createEntityAdapter<IAlert>();
