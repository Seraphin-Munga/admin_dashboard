import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert';
import { IEmployeeCreationModel } from 'src/app/core/models/employee-creation.model';
import { EmployeeResourceService } from 'src/app/core/services/employee-resource.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public form!: FormGroup;
  public loading: boolean = false;


  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _employeeResourceService: EmployeeResourceService,
    private readonly _alertService: AlertService
  ) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public async save(): Promise<void> {
    const employeeCreationModel: IEmployeeCreationModel = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      roleID: parseInt(this.form.value.roleID),
      gender: this.form.value.gender,
      telephone: this.form.value.telephone,
      email: this.form.value.email,
      salary: this.form.value.salary,
      password: this.form.value.password,
      hasAccess: true,
      address: this.form.value.address,
    };
    try {
      if (this.form.valid) {
        this.loading = true;
        await this._employeeResourceService.create(employeeCreationModel);

        this._alertService.success("Success", 'the employee has  been saved successful');
        this._router.navigate(["/employee/employees"]);
      } else {
        this._alertService.error("", 'Please ensure that all required fields are entered.');
      }
    } catch (error) {
      this.loading = false;
      this._alertService.error("", 'Something went wrong.');
    }
  }

  public initializeForm(): void {
    this.form = this._formBuilder.group({
      firstName: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      salary: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      address: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      lastName: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      roleID: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      telephone: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      gender: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
    });
  }


}
