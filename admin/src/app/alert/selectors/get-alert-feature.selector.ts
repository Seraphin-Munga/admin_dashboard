import { createFeatureSelector, MemoizedSelector } from "@ngrx/store";
import { IAlertState } from "../models";
import { alertAdapter } from "../adapters";
import { FeatureStore } from "../../core/models/feature-store.models";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export const getAlertFeature: MemoizedSelector<
  any,
  IAlertState
> = createFeatureSelector<IAlertState>(FeatureStore.AlertFeature);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = alertAdapter.getSelectors(getAlertFeature);
