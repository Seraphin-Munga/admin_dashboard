import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { AlertService } from 'src/app/alert';
import { IProductCreationModel } from 'src/app/core/models/product-creation-model';
import { ProductResourceService } from 'src/app/core/services/product-resource.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  public form!: FormGroup;
  public loading: boolean = false;
  public fileList: Array<NzUploadFile> = [];
  public productCreationModel!: IProductCreationModel;

  public constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _productResourceService: ProductResourceService,
    private readonly _alertService: AlertService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.initializeForm();
  }

  public beforeUpload = (file: any): boolean => {
    const vm = this;
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = function () {
        vm.form.patchValue({
          base64String: reader.result,
        });
      };
    }
    return true;
  };

  public handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
    } else if (status === 'error') {
    }
  }

  public async save(): Promise<void> {
    this.loading = true;
    try {
      this.productCreationModel = {
        productName: this.form.value.productName,
        quantity: parseInt(this.form.value.quantity),
        price: this.form.value.price,
        description: this.form.value.description,
        base64String: this.form.value.base64String,
      };

      if (this.form.valid) {
        this.loading = true;
        await await this._productResourceService.create(this.productCreationModel);

        this._alertService.success("Success", 'the product has  been saved successful');
        this._router.navigate(["/product/products"]);
      } else {
        this._alertService.error("", 'Please ensure that all required fields are entered.');
      }


      this.loading = false;
    } catch (error) {
      this.loading = false;
      this._alertService.error("", 'Something went wrong.');
    }
  }

  public initializeForm(): void {
    this.form = this._formBuilder.group({
      productName: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],

      base64String: [
        null,
        [
          Validators.required,
        ],
      ],

      description: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      quantity: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      price: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
    });
  }
}
