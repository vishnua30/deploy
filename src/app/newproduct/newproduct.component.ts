import { Component ,OnInit} from '@angular/core';
import { Dimension } from "../Dimension";
import { Observer } from "rxjs";
import {  NewProdApiService} from "./new-prod-api.service";
import {  HttpClient,HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent  implements OnInit {

  productList!:any
 
  constructor(public app:NewProdApiService){
    app.getPost().subscribe((data)=>{
      this.productList=data
      console.warn(data)
    })

  }
    ngOnInit() {
     
    }
    submit(data:any){
      
   alert("Product added sucessfully")
   console.log(data)
   this.app.post(data).subscribe((data)=>
   {
    console.warn(data)
   })
    }
  
  }
  


 
