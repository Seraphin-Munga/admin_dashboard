import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";
import { alertReducer } from "./reducers";
import { AlertPanelComponent } from "./components";
import { FeatureStore } from "../core/models/feature-store.models";
import { EffectsModule } from "@ngrx/effects";
import { AlertEffects } from "./effects";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AlertPanelComponent],
  exports: [AlertPanelComponent],
  imports: [
    SharedModule,
    NzAlertModule,
    CommonModule,
    StoreModule.forFeature(FeatureStore.AlertFeature, alertReducer),
    EffectsModule.forFeature([AlertEffects]),
  ],
})
export class AlertModule { }
