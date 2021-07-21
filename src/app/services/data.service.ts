import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Constructor
   * @param http cliente http angular 
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * HTTP GET
   * @param url ruta 
   * @param httpParams parametros 
   */
  get<T>(url: string, httpParams?: any): Observable<HttpResponse<T>>{
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.get<T>(url,
      {
        headers: httpHeaders,
        params: httpParams,
        observe: 'response'
      })
  }

  /**
   * POST
   * @param url ruta
   * @param data body
   */
  post<T>(url: string, data: any): Observable<HttpResponse<T>>{
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.post<T>(url,data,
      {
        headers: httpHeaders,
        observe: 'response'
      })
  }

  /**
   * PUT
   * @param url ruta
   * @param data body
   */
  put<T>(url: string, data: any): Observable<HttpResponse<T>>{
    const httpHeaders: HttpHeaders = this.getHeaders();

    return this.http.put<T>(url,data,
      {
        headers: httpHeaders,
        observe: 'response'
      })
  }

  /**
   * Función que retorna HEADERS DE LAS PETICIONES HTTP
   * Obsolete, ahora el responsable es HTTP INTERCEPTOR
   */
  getHeaders(): HttpHeaders{
    let httpHeaders: HttpHeaders = new HttpHeaders();
    
    return httpHeaders;
  }
}
