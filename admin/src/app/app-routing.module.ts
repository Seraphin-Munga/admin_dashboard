import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('../app/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../app/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../app/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../app/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '',
    redirectTo: 'dashboard/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
