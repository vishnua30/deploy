import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManualentryService {

  root_url="   http://localhost:3000/manual-entry " 
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
   posts(data:any)
   {
    return this.http.post(this.root_url,data)
   }
}
