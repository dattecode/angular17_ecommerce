import { Injectable } from '@angular/core';
import { ContractProducts } from '../contract/CProducts';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService {
  // Propiedades para la lógica de la aplicación
  products: ContractProducts[] = []; // Almacena los productos disponibles
  cart: ContractProducts[] = []; // Almacena los productos en el carrito
  amount: number = 0; // Almacena el monto total del carrito

  // Métodos para la gestión de productos

  /**
   * Retorna los productos disponibles.
   *  Un arreglo de productos.
   */
  getProducts(): ContractProducts[] {
    return this.products;
  }

  /**
   * Imprime en la consola los productos almacenados.
   */
  logProdutc(): void {
    console.log(this.products);
  }

  /**
   * Establece los productos recibidos como los productos disponibles.
   *  getProducts Un arreglo de productos.
   */
  addTheProducts(getProducts: ContractProducts[]): void {
    this.products = getProducts;
  }

  // Métodos para la gestión del carrito de compras

  /**
   * Retorna los productos en el carrito de compras.
   *  Un arreglo de productos en el carrito.
   */
  getCarrito(): ContractProducts[] {
    return this.cart;
  }

  /**
   * Agrega un producto al carrito de compras si no está presente y recalcula el monto total.
   *  product El producto a agregar al carrito.
   */
  addCarrito(product: ContractProducts): void {
    if (!this.cart?.includes(product)) {
      this.cart?.push(product);
      this.valueMonto();
    }
  }

  /**
   * Elimina un producto del carrito de compras basado en su ID y recalcula el monto total.
   * id El ID del producto que se desea eliminar del carrito.
   */
  deleteCarrito(id: number): void {
    this.cart = this.cart?.filter((item) => item.id != id);
    this.valueMonto();
  }

  /**
   * Limpia el carrito de compras y establece el monto total en 0.
   */
  resetCart(): void {
    this.cart = [];
    this.amount = 0;
  }

  // Métodos para el cálculo del monto total del carrito

  /**
   * Retorna el monto total del carrito de compras.
   *  El monto total del carrito.
   */
  getAmount(): number {
    return this.amount;
  }

  /**
   * Calcula el monto total del carrito de compras sumando el precio de cada producto.
   */
  valueMonto(): void {
    this.amount = 0;
    this.cart?.forEach((item) => {
      this.amount += item.price;
    });
  }
}
