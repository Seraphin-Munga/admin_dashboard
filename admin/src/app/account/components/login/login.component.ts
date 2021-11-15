import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert';
import { ILogin } from 'src/app/core/models/login.model';
import { AuthenticationResourceService } from 'src/app/core/services/authentication-resource.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public loading: boolean = false;

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _loginService: AuthenticationResourceService,
    private readonly _alertService: AlertService,
  ) { }

  public ngOnInit(): void {
    this.initializeForm();
  }
  public async login(): Promise<void> {
    this.loading = true;
    try {
      if (this.form.valid) {
        const credentials: ILogin = {
          email: this.form.value.email,
          password: this.form.value.password,
          isAdmin: true
        };

        await this._loginService.login(credentials);
        this._router.navigate(["/dashboard/dashboard"]);
        this.loading = false;
      } else {
        this.loading = false;
        this._alertService.error("", 'Please ensure that all required fields are entered.');
      }
    } catch (error) {
      this.loading = false;
      this._alertService.error("", 'Something went wrong.');
    }
  }

  public initializeForm(): void {
    this.form = this._formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
    });
  }
}
