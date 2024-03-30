import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractProducts } from '../contract/CProducts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = "https://fakestoreapi.com/products";
  private _http = inject(HttpClient);

  /**
   * Obtiene todos los productos disponibles desde la API externa.
   * Un Observable de la lista de productos.
   */
  getApi():Observable<ContractProducts[]>{
    return this._http.get<ContractProducts[]>(this.baseUrl);
  }
}