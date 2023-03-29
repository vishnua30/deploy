import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newlocation } from './newLoc';

@Injectable({
  providedIn: 'root'
})
export class NewLocApiService {

  datas:any;
  prod!:any
  root_url=" http://localhost:3000/location"
  constructor(private http:HttpClient) { }


  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getPost() {
    return this.http.get<newlocation>(this.root_url+'/')
    
    }
    post(data:any){
      return this.http.post(this.root_url,data)
    }

}
