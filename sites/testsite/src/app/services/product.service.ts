import { Injectable } from '@angular/core';

// importar firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from '../models/product';


@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) {


  }

  getProducts() {
    // from firebase, get a list of all elements from 'products' collection
    this.productList = this.firebase.list('products');
    return this.productList;
  }

  insertProducts(product: Product) {
    // insert a product to database, addint at the end of productlist one element
    // this.productList.push(product);

    this.productList.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });

  }

  updateProduct(product: Product) {
    // update a certain product element in the list
    // first it is needed to find by a key one product and after that
    // we pass an object with all elements data to update

    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
