import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../layouts/components/dashboard/dashboard-layout.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      { path: "profile", component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
