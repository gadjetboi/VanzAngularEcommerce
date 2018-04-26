import { Injectable, EventEmitter, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../interfaces/app-state';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../redux/actions/action';

@Injectable()
export class ProductService {

  products = new Array<ProductModel>();

  @Output()
  productSelected = new EventEmitter<ProductModel>();
  
  constructor(private store: NgRedux<IAppState>) { 
    this.addDefaultProducts();
  }

  private addDefaultProducts() {
    this.products = [
      new ProductModel("Product1", "Product Description1", 20, "https://images.apple.com/v/macbook-pro/n/images/overview/compare13_small.jpg"),
      new ProductModel("Product2", "Product Description2", 40, "https://images.apple.com/v/macbook-pro/n/images/overview/compare13_touchbar_small.jpg")
    ];

    this.store.dispatch({type: ADD_PRODUCT, payload: { products: this.products }});
  }
  
  saveProduct(product: ProductModel) {
    this.products.push(product);

    this.store.dispatch({type: ADD_PRODUCT, payload: { products: this.products }});
  }

  getProducts<T>() : Observable<T> {
    let response: HttpResponse<T>;
    response = this.createResponse<T>(this.products, 200);
    return Observable.of(response.body);
  }

  searchProducts<T>(term: string) : Observable<T> {

    let response: HttpResponse<T>;

    let searchResults = this.products.map((res) => {
      if(res.name.toLowerCase().includes(term.toLowerCase())) {
        return new ProductModel(
          res.name,
          res.description,
          res.price,
          res.imgUrl
        );
      }
    }).filter((res) => {
      return (typeof(res) !== 'undefined');
    });

    response = this.createResponse<T>(searchResults, 200);
    return Observable.of(response.body);
  }

  remove(key: string) : void {
  
    this.products = this.products.filter((res) => {
      let tempKey = res.name+res.description; //TODO: temporary: change when using ID
     
      return (tempKey !== key);
    });

    this.store.dispatch({type: REMOVE_PRODUCT, payload: { products: this.products }});
  }

  private createResponse<T>(body, status: number) {
    return new HttpResponse<T>({ body: body, status: status });
  }
}
