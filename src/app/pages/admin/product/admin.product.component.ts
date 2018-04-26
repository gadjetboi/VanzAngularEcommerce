import { Component, OnInit, TemplateRef, Output } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from '../../../services/product.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddProductModalComponent } from '../../add-product-modal/add-product-modal.component';

import { ProductModel } from '../../../models/product.model';
import { IAppState } from '../../../interfaces/app-state';
import { NgRedux } from '@angular-redux/store';
import { SELECTED_PRODUCT } from '../../../redux/actions/action';

@Component({
  selector: 'admin-product-component',
  templateUrl: './admin.product.component.html',
  styleUrls: ['./admin.product.component.css']
})

export class AdminProductComponent implements OnInit {
  modalRef: BsModalRef;
  productLists = new Array<ProductModel>();

  constructor(
    private modalService: BsModalService, 
    public productService: ProductService,
    private store: NgRedux<IAppState>) {}
 
  openAddProductModal() {
    const initialState = {
      title: 'Create Product'
    };
    this.modalRef = this.modalService.show(AddProductModalComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
    this.loadDefaultProducts();
    this.watchProducts();
  }

  loadDefaultProducts() {
    this.productService.getProducts<ProductModel>().subscribe((res)=>{
      Object.assign(this.productLists, res);
    });
  }

  watchProducts() {
    this.store.select<IAppState>().subscribe((res: IAppState) => {
      this.productLists = new Array<ProductModel>();
      Object.assign(this.productLists, res.products);
    });
  }

  selectedProduct(product: ProductModel) {
    this.store.dispatch({ type: SELECTED_PRODUCT, payload: { selectedProduct: product }});
  }
}
