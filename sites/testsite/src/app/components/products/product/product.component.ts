import { Component, OnInit } from '@angular/core';

// import services
import { ProductService } from '../../../services/product.service';

// import angular ng forms
import { NgForm } from '@angular/forms';

// import Product class
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value.$key != null) {
      this.productService.updateProduct(productForm.value);
    } else {
      this.productService.insertProducts(productForm.value);
    }

    this.resetForm(productForm);
  }
}
