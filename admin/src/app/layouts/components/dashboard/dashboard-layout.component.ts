import { Component, OnInit } from '@angular/core';
import { menus } from '../../menus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  public isCollapsed: boolean = false;
  public menus: any


  public ngOnInit(): void {
    this.menus = menus;
  }

}
