import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from "../Product";

@Injectable({
  providedIn: 'root'
})
export class RelocationApiService {

  datas:any;
  prod!:any
  root_url="http://localhost:3000/reclocationForm"
  constructor(private http:HttpClient) { }


  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getPost() {
    return this.http.get<Product>(this.root_url+'/')
    
    }
    postData(data:any)
    {
      return this.http.post(this.root_url,data)
    }
}
