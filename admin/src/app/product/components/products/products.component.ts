import { Component, OnInit } from '@angular/core';
import { IProductRetrievalModel } from 'src/app/core/models/product-retrieval.model';
import { ProductResourceService } from 'src/app/core/services/product-resource.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Array<IProductRetrievalModel> = [];

  public displayedColumns: string[] = ['productName', 'quantity', 'price', 'action'];

  public constructor(private readonly _productResourceService: ProductResourceService) { }


  public async ngOnInit(): Promise<void> {
    this.products = await this.getProducts();
  }

  public async getProducts(): Promise<Array<IProductRetrievalModel>> {
    return this._productResourceService.get();
  }

}
