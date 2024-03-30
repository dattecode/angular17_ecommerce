import { Component, OnInit, inject, input } from '@angular/core';
import { UserLogicService } from '../../services/user-logic.service';
import { ContractProducts } from '../../contract/CProducts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css',
})
export class CarroComponent implements OnInit {
  private _userLogic = inject(UserLogicService);
  cartPush: boolean = true;
  cart: ContractProducts[] = [];
  amount?: number;
  buyConfirm:boolean = false;
  buyText: string = "Please Choose Products";

  /**
   * Cambia la visibilidad del carrito de compras.
   */
  changePush() {
    this.cartPush = !this.cartPush;
    this.updateAmount();
  }

  /**
   * Elimina un producto del carrito.
   *  id Identificador del producto a eliminar.
   */
  deleteItem(id: number) {
    this._userLogic.deleteCarrito(id);
    this.updateCart();
    this.updateAmount();
  }

  /**
   * Actualiza la lista de productos en el carrito.
   */
  updateCart() {
    this.cart = this._userLogic.getCarrito();
  }

  /**
   * Calcula y actualiza el monto total de los productos en el carrito.
   */
  updateAmount() {
    this.amount = this._userLogic.getAmount();
  }

  /**
   * Verifica si es posible realizar la compra y actualiza el estado de confirmación de compra.
   */
  checkBuy(){
    this.buyConfirm = true;
    this.cartPush = !this.cartPush;
    if(this.cart.length > 0){
      this.buyText = `the total amount is: `;
    } else {
      this.buyText = "Please Choose Products";
    }
  }

  /**
   * Finaliza la compra, reinicia el carrito y actualiza la interfaz.
   */
  buyCompleted() {
    this.buyConfirm = !this.buyConfirm;
    this._userLogic.resetCart();
    this.updateCart();
  }

  ngOnInit(): void {
    this.updateCart();
  }
}