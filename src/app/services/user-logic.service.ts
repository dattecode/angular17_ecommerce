import { Injectable} from '@angular/core';
import { ContractProducts } from '../contract/CProducts';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService {

  //logic
  products: ContractProducts[] = [];
  cart: ContractProducts[] = [];
  amount: number = 0;

  //productos
  getProducts() {
    return this.products;
  }

  logProdutc() {
    return console.log(this.products);
  }

  addTheProducts(getProducts: ContractProducts[]) {
    this.products = getProducts;
  }

  //carro
  getCarrito() {
    return this.cart;
  }

  addCarrito(product: ContractProducts) {
    if (!this.cart?.includes(product)) {
      this.cart?.push(product);
      this.valueMonto();
    }
  }

  deleteCarrito(id: number) {
    this.cart = this.cart?.filter((item) => (item.id != id));
    this.valueMonto();
  }

  resetCart() {
    this.cart = [];
    this.amount = 0;
  }

  //monto
  getAmount() {
    return this.amount;
  }

  valueMonto() {
    this.amount = 0;
    this.cart?.forEach((item) => {
      this.amount += item.price;
    });
  }
}
