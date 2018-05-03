import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';

import { KsCurrencyMask } from '../../node_modules/ks-currency-mask/lib/ks-currency-mask.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { SettingComponent } from './pages/setting/setting.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminProductComponent } from './pages/admin/product/admin.product.component';
import { CustomerInfoComponent } from './pages/checkout/customer-info/customer-info.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BillingAddressComponent } from './pages/checkout/billing-address/billing-address.component';
import { PaymentInfoComponent } from './pages/checkout/payment-info/payment-info.component';
import { ReviewComponent } from './pages/checkout/review/review.component';

import { AddProductModalComponent } from './pages/add-product-modal/add-product-modal.component';
import { CheckoutModalComponent } from './pages/checkout/checkout-modal/checkout-modal.component';
import { OrderDetailModalComponent } from './pages/admin/order-detail-modal/order-detail-modal.component';

import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './pages/admin/product-detail/product-detail.component';
import { CartService } from './services/cart.service';
import { SettingService } from './services/setting.service';
import { OrderService } from './services/order.service';
import { UtilityService } from './services/utility.service';
import { ToastyMessageService } from './services/toasty.service';

import { IAppState } from './interfaces/app-state';
import { rootReducer, INITIAL_STATE }  from './redux/store';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SettingComponent,
    ProductComponent,
    AdminProductComponent,
    CartComponent,
    CustomerInfoComponent,
    AddProductModalComponent,
    ProductDetailComponent,
    OrderComponent,
    CheckoutModalComponent,
    AdminComponent,
    BillingAddressComponent,
    PaymentInfoComponent,
    ReviewComponent,
    OrderDetailModalComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    KsCurrencyMask,
    NgReduxModule,
    CommonModule,
    ToastyModule.forRoot()
  ],
  entryComponents: [AddProductModalComponent, CheckoutModalComponent, OrderDetailModalComponent],
  providers: [ProductService, CartService, SettingService, OrderService, UtilityService, ToastyMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private ngRedux: NgRedux<IAppState>, 
              private devTools: DevToolsExtension) {
                
    let enhancers = [];
    let middleware = [];

    if (isDevMode() && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
   
    ngRedux.configureStore(rootReducer, INITIAL_STATE, middleware, enhancers);
  }
}
