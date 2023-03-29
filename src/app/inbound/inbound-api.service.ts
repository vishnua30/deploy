import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inbound } from './inbound1';
@Injectable({
  providedIn: 'root'
})
export class InboundApiService {
  root_url="   http://localhost:3000/inboundForm" 
  constructor(private http:HttpClient) {

   }
   httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
   getPosts()
   {
    return this.http.get(this.root_url);
   }
   post(data: any)
   {
    return this.http.post(this.root_url,data)
   }
}
