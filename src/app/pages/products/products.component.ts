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
  //injects
  private _userLogic = inject(UserLogicService);
  private _apiServices = inject(ApiService);
  // data
  products: ContractProducts[] = [];
  filterProducts: ContractProducts[] = [];
  Category = Category;
  categoryOn: boolean = true;

  //logic
  categoryProducts(selectCategory: Category) {
    this.filterProducts = this.products.filter(
      (item) => item.category === selectCategory
    );
  }

  categoryPush(){
    this.categoryOn = !this.categoryOn
  }

  allProducts() {
    this.filterProducts = this.products;
  }

  addToCart(product: ContractProducts) {
    this._userLogic.addCarrito(product);
  }

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
