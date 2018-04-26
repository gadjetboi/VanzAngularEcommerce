import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../interfaces/app-state';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  search = new FormControl();
  productLists = new Array<ProductModel>();
  loading: boolean;
  searchResults = new Observable<ProductModel>();
  
  constructor(public productService: ProductService,
              public cartService: CartService,
              private store: NgRedux<IAppState>) { }

  ngOnInit() {
    this.loadDefaultProducts();
    this.watchProducts();

    this.searchResults = this.search.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.productService.searchProducts<ProductModel>(term))
      .do(_ => this.loading = false);

    this.searchResults.subscribe((res) => {
      this.productLists = new Array<ProductModel>();
      Object.assign(this.productLists, res);
    });
  }

  loadDefaultProducts() {
    this.productService.getProducts<ProductModel>().subscribe((res)=>{
      Object.assign(this.productLists, res);
    });
  }

  watchProducts() {
    this.store.select().subscribe((res: IAppState) => {
      this.productLists = new Array<ProductModel>();
      Object.assign(this.productLists, res.products);
    });
  }
}
