import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './component/profile/profile.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NzGridModule,
    NzCardModule,
    NzFormModule,
    MatGridListModule,
    MatCardModule,
    NzInputModule,
    MatIconModule,
    MatDividerModule,
    NzIconModule
  ]
})
export class ProfileModule { }
