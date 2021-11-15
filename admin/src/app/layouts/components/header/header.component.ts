import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationResourceService } from 'src/app/core/services/authentication-resource.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public constructor(
    private readonly _router: Router,
    private readonly _authenticationResourceService: AuthenticationResourceService
  ) { }


  public logout(): void {
    this._authenticationResourceService.clearLocalStorage();
    this._router.navigate(["/account/login"])
  }
}
