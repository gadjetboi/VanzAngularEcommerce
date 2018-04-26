import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../interfaces/app-state';

@Component({
  selector: 'product-detail-component',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail = new ProductModel();
  isSelected: boolean = false;
  
  constructor(private store: NgRedux<IAppState>) { 

  }

  ngOnInit() {
    this.watchProductSelected();
  }

  watchProductSelected() {
    this.store.select().subscribe((res: IAppState) => {
      Object.assign(this.productDetail, res.selectedProduct);
      
      if(typeof(res.selectedProduct) != 'undefined' && typeof(res.selectedProduct.name) !== 'undefined')
        this.isSelected = true;
    });
  }
}
