import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable,retry,throwError } from "rxjs";
import { newproduct } from './newProduct';

@Injectable({
  providedIn: 'root'
})
export class NewProdApiService implements OnInit{

  datas:any;
  prod!:any
  root_url="  http://localhost:3000/product  "
  constructor(private http:HttpClient){

  }
  
  ngOnInit(){
    
    this.getPost()
  
  }

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getPost() {
      return this.http.get<newproduct>(this.root_url+'/product')
      
    }
    post(data:any){
      return this.http.post(this.root_url,data)
    }
}

