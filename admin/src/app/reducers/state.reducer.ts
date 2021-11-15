import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface IState {}

export const reducers: ActionReducerMap<IState> = {};
export enum FeatureStore {
    AccountFeature = 'account-feature',
    AlertFeature = 'alert-feature',
}
export const localStorageSyncReducer = (reducer: ActionReducer<IState>): ActionReducer<IState> => {
    return localStorageSync({
        // keys: ['property-feature', 'core-feature', 'sales-application-feature', 'sales-deliveryBuckets-feature'],
        keys: [FeatureStore.AccountFeature, FeatureStore.AlertFeature],
        rehydrate: true
    })(reducer);
};
