import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractProducts } from '../contract/CProducts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://fakestoreapi.com/products"
  private _http = inject(HttpClient)

  getApi():Observable<ContractProducts[]>{
    return this._http.get<ContractProducts[]>(this.baseUrl)
  }

}
