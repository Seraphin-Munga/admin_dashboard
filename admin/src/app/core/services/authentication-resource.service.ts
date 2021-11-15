import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { AccountRetrievalModel } from '../models/account-retrieval.model';
import { ILogin } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationResourceService {
  public accountRetrievalModel!: AccountRetrievalModel;

  public constructor(
    private readonly _http: HttpClient,
    private readonly _localStorage: LocalStorageService,
    private readonly _sessionStorage: SessionStorageService
  ) { }

  public getToken(): string {
    return this._sessionStorage.retrieve('authenticationToken');
  }

  public getUserID(): string {
    return this._sessionStorage.retrieve('userID');
  }


  public async login(credentials: ILogin): Promise<AccountRetrievalModel> {
    this.clearLocalStorage();

    const response = await this._http
      .post<AccountRetrievalModel>(
        `${environment.serverApiUrl}Account/authenticate`,
        credentials,
        { observe: 'response' }
      )
      .toPromise();
    this._sessionStorage.store('authenticationToken', response.body?.token);
    this._sessionStorage.store('userID', response.body?.userID);

    this.accountRetrievalModel = {
      userID: response.body?.userID,
      roleId: response.body?.roleId,
      firstName: response.body?.firstName,
      lastName: response.body?.lastName,
      email: response.body?.email,
      telephone: response.body?.telephone,
      gender: response.body?.gender,
    };

    return this.accountRetrievalModel;
  }

  public clearLocalStorage(): void {
    this._localStorage.clear('authenticationToken');
  }
}
