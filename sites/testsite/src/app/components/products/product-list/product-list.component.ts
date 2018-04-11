import { Component, OnInit } from '@angular/core';

// import service
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // los metodos snapshotchanges y subscribe, estan escuchando cada cambio
    // en el arreglo y llena el arreglo productlist
    this.productService.getProducts().snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productList.push(x as Product);
        });
    });
  }

  getProductList() {
    console.log('entrooo');
    this.productService.getProducts();
    return this.productService.productList;
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete(key: string) {
    this.productService.deleteProduct(key);
  }
}
