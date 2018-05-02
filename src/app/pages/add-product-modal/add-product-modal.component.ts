import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { ToastyService } from 'ng2-toasty';
import { ToastyMessageService } from '../../services/toasty.service';

@Component({
  selector: 'add-product-modal.component',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})

export class AddProductModalComponent implements OnInit {

  title: string;
  closeBtnName: string;

  productForm = new FormGroup({
    productName: new FormControl('',[
      Validators.required]),
    productDescription: new FormControl('',[
      Validators.required]),
    productPrice: new FormControl('',[
      Validators.required]),
    productImageUrl: new FormControl('',[
      Validators.required])
  });
 
  constructor(public bsModalRef: BsModalRef, 
              public productService: ProductService,
              private toastyMessageService: ToastyMessageService) {

              
              }
 
  ngOnInit() {
  
  }

  save() {
    if(!this.productForm.valid) {
      this.toastyMessageService.showMessage('', 'Invalid Form', 'error'); //TODO: move to common
      return;
    }

    let newProduct = new ProductModel(
      this.productForm.value.productName, 
      this.productForm.value.productDescription,
      this.productForm.value.productPrice,
      this.productForm.value.productImageUrl);

    this.productService.saveProduct(newProduct);

    this.bsModalRef.hide();
  }
}