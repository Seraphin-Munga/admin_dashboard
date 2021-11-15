import { Component, OnInit } from '@angular/core';
import { EmployeetRetrievalModel } from 'src/app/core/models/employee-retrieval.model';
import { EmployeeResourceService } from 'src/app/core/services/employee-resource.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public displayedColumns: string[] = ['firstName', 'lastName', 'telephone', 'gender', 'email', 'action'];
  public employees: Array<EmployeetRetrievalModel> = [];

  public constructor(private readonly _employeeResourceService: EmployeeResourceService) { }


  public async ngOnInit(): Promise<void> {
    this.employees = await this.getEmployees();
  }

  public async getEmployees(): Promise<Array<EmployeetRetrievalModel>> {
    return this._employeeResourceService.get();
  }


}
