import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../layouts/components/dashboard/dashboard-layout.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'users', component: UserComponent },
      { path: 'users/add-user', component: AddUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
