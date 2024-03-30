import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLogicService } from './services/user-logic.service';
import { ProductsComponent } from './pages/products/products.component';
import { CarroComponent } from './pages/carro/carro.component';
import { ApiService } from './services/api.service';
import { ContractProducts } from './contract/CProducts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent, CarroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private _userLogic = inject(UserLogicService);
  private _apiServices = inject(ApiService);
  title = 'eCommerce_01';

  /**
   * Al inicializar el componente, se realiza una petición para obtener los productos
   * y almacenarlos para su uso en otros componentes.
   */
  ngOnInit(): void {
    this._apiServices.getApi().subscribe({
      next: (data: ContractProducts[] | undefined) => {
        if (data) {
          this._userLogic.addTheProducts(data);
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}