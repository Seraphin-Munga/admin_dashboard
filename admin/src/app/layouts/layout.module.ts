import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './components/dashboard/dashboard-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AlertModule } from '../alert';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    HeaderComponent,


  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    AlertModule
  ]
})
export class LayoutModule { }
