import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl = environment.apiUrl;

  constructor(public _http: HttpClient) { }

    
  get<T>(url: string){
    return this._http.get<T>(`${this.apiUrl}/${url}`)
  }

  post<T>(url: string, body: any){
    return this._http.post<T>(`${this.apiUrl}/${url}`,body)
  }

  put<T>(url: string, body: any){
    return this._http.put<T>(`${this.apiUrl}/${url}`,body)
  }

  delete<T>(url:string){
    return this._http.delete<T>(`${this.apiUrl}/${url}`);
  }

}
