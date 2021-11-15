import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProductCreationModel } from '../models/product-creation-model';
import { IProductRetrievalModel } from '../models/product-retrieval.model';
import { AuthenticationResourceService } from './authentication-resource.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResourceService {
  public constructor(
    private readonly _http: HttpClient,
    private readonly _jwtService: AuthenticationResourceService
  ) { }

  public async get(): Promise<Array<IProductRetrievalModel>> {
    try {
      const response = await this._http
        .get<Array<IProductRetrievalModel>>(
          `${environment.serverApiUrl}Product`
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

  public async detail(productID: string): Promise<IProductRetrievalModel> {
    try {
      const response = await this._http
        .get<IProductRetrievalModel>(
          `${environment.serverApiUrl}Product/${productID}`
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

  public async create(model: IProductCreationModel): Promise<void> {
    const dvg = model.base64String.replace("data:image/jpeg;base64,", "");
    try {
      const CcreatedBy = this._jwtService.getUserID();
      model.createdBy = CcreatedBy;
      model.employeeID = "35622262-32cd-4cf1-996d-286379e63d32"; //// need to be fixed to the databse
      await this._http
        .post<void>(`${environment.serverApiUrl}Product`, {
          employeeID: model.employeeID,
          productName: model.productName,
          quantity: model.quantity,
          price: model.price,
          base64String: dvg,
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
}
