import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetrunapiCompService {

 
  root_url="http://localhost:3000/returnForm"
  constructor(private http:HttpClient) { }


  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getPost() {
    return this.http.get(this.root_url+'/')
    
    }
    postData(data:any)
    {
      return this.http.post(this.root_url,data)
    }
}
