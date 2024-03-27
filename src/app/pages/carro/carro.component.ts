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
  //inject
  private _userLogic = inject(UserLogicService);
  cartPush: boolean = true;
  //data
  cart: ContractProducts[] = [];
  amount?: number;
  buyConfirm:boolean = false
  buyText: string = "Please Choose Products"

  //btn
  changePush() {
    this.cartPush = !this.cartPush;
    this.updateAmount()
  }

  //cart
  deleteItem(id: number) {
    this._userLogic.deleteCarrito(id);
    this.updateCart();
    this.updateAmount();
  }

  updateCart() {
    this.cart = this._userLogic.getCarrito();
  }

  updateAmount() {
    this.amount = this._userLogic.getAmount();
  }

  checkBuy(){
    this.buyConfirm = true
    this.cartPush = !this.cartPush
    if(this.cart.length > 0){
      this.buyText = `the total amount is: `
    } 
    else {
      this.buyText = "Please Choose Products"
    }
  }

  buyCompleted() {
    this.buyConfirm = !this.buyConfirm
    this._userLogic.resetCart();
    this.updateCart()
  }

  ngOnInit(): void {
    this.updateCart();
  }
}
