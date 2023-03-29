import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TruckCompService {

  root_url=" http://localhost:3000/truckservce"
  constructor(private http:HttpClient) { }


  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getPost() {
    return this.http.get(this.root_url+'/')
    
    }
    post(data:any)
    {
      return this.http.post(this.root_url,data)
    }


}
