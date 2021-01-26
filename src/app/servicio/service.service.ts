import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient:HttpClient) { }



  mandarregistro(arrayjson:any){
    let json=JSON.stringify(arrayjson);
    let headers=new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpclient.post("http://dev.plazalama.com/intranet_np/services/create_invoice"
    , json, {headers: headers});
  }
}

