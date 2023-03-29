import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutLocApiService {

  root_url="   http://localhost:3000/outloccomp " 
  constructor(private http:HttpClient) { }
  
  
   httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
   getPosts()
   {
    return this.http.get(this.root_url);
   }
   post(data:any)
   {
    return this.http.post(this.root_url,data)
   }
}
