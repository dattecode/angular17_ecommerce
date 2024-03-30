import { Component, OnInit, inject } from '@angular/core';
import { UserLogicService } from '../../services/user-logic.service';
import { ContractProducts, Category } from '../../contract/CProducts';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private _userLogic = inject(UserLogicService);
  private _apiServices = inject(ApiService);
  
  products: ContractProducts[] = [];
  filterProducts: ContractProducts[] = [];
  Category = Category;
  categoryOn: boolean = true;

  /**
   * Filtra los productos mostrados según la categoría seleccionada.
   *  selectCategory La categoría por la cual filtrar.
   */
  categoryProducts(selectCategory: Category) {
    this.filterProducts = this.products.filter(
      (item) => item.category === selectCategory
    );
  }

  /**
   * Alterna la visibilidad de las categorías de productos.
   */
  categoryPush(){
    this.categoryOn = !this.categoryOn;
  }

  /**
   * Muestra todos los productos sin filtrar por categoría.
   */
  allProducts() {
    this.filterProducts = this.products;
  }

  /**
   * Agrega un producto al carrito de compras.
   * product El producto a agregar.
   */
  addToCart(product: ContractProducts) {
    this._userLogic.addCarrito(product);
  }

  /**
   * Reinicia la lista de productos a mostrar con todos los productos disponibles.
   */
  resetProduct() {
    this.products = this._userLogic.getProducts();
    this.filterProducts = this._userLogic.getProducts();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.resetProduct();
    }, 1700);
  }
}