import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEmployeeCreationModel } from '../models/employee-creation.model';
import { EmployeetRetrievalModel } from '../models/employee-retrieval.model';
import { AuthenticationResourceService } from './authentication-resource.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResourceService {
  public constructor(
    private readonly _http: HttpClient,
    private readonly _jwtService: AuthenticationResourceService
  ) { }

  public async create(model: IEmployeeCreationModel): Promise<void> {
    try {
      const CcreatedBy = this._jwtService.getUserID();
      model.createdBy = CcreatedBy;
      debugger;

      await this._http
        .post<void>(`${environment.serverApiUrl}Employee`, {
          firstName: model.firstName,
          lastName: model.lastName,
          roleID: model.roleID,
          gender: model.gender,
          telephone: model.telephone,
          email: model.email,
          salary: model.salary,
          password: model.password,
          hasAccess: true,
          address: model.address,
          createdBy: model.createdBy,
        })
        .toPromise();
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error(
          'A connection could not be established. Please contact an administrator.'
        );
      }
      throw Error(error.error);
    }
  }

  public async get(): Promise<Array<EmployeetRetrievalModel>> {
    try {
      const response = await this._http
        .get<Array<EmployeetRetrievalModel>>(
          `${environment.serverApiUrl}Employee`
        )
        .toPromise();
      return response;
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error(
          'A connection could not be established. Please contact an administrator.'
        );
      }
      throw Error(error.error);
    }
  }

  public async detail(employeeID: string): Promise<EmployeetRetrievalModel> {
    try {
      const response = await this._http
        .get<EmployeetRetrievalModel>(
          `${environment.serverApiUrl}Employee/${employeeID}`
        )
        .toPromise();
      return response;
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error(
          'A connection could not be established. Please contact an administrator.'
        );
      }
      throw Error(error.error);
    }
  }
}
