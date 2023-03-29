import { Component } from '@angular/core';
import { ProductcartApiService } from "./productcart-api.service";
@Component({
  selector: 'app-product-craft',
  templateUrl: './product-craft.component.html',
  styleUrls: ['./product-craft.component.css']
})
export class ProductCraftComponent {
  data =[
    {
      "S_No":1,
      "Product_Name":"ABC",
      "Product_code":16237729,
      "Transfer_type":"Inbound",
      "Temporary_Location":"Rack 53,Shelf 12",
      "Robot_status":"click to activate",
      "Scanned_location": "Rack 53,Shelf 12",
      "Validation": "Validated"
    },
    {
      "S_No":2,
      "Product_Name":"SDF",
      "Product_code":4873987,
      "Transfer_type":"Outbound",
      "Temporary_Location":"Rack 53,Shelf 12",
      "Robot_status":"Delivered",
      
      "Scanned_location": "Rack 53,Shelf 12",
      "Validation": "Invalid"
    },
    {
      "S_No":3,
      "Product_Name":"FER",
      "Product_code":73487388,
      "Transfer_type":"Relocation",
      "Temporary_Location":"Rack 42,Shelf 68",
      "Robot_status":"On Duty",  
      "Scanned_location": "Rack 42,Shelf 68",
      "Validation": "Validated"
    },
    {
      "S_No":4,
      "Product_Name":"JTR",
      "Product_code":7348747388,
      "Transfer_type":"Outbound",
      "Temporary_Location":"Rack 73,Shelf 23",
      "Robot_status":"Unassigned",
      "Scanned_location": "Rack 73,Shelf 23",
      "Validation": ""
    },
    {
      "S_No":5,
      "Product_Name":"WEN",
      "Product_code":873473782,
      "Transfer_type":"Inbound",
      "Temporary_Location":"Rack 25,Shelf 05",
      "Robot_status":"Robot malfunctioned. Its currently near Rack 15, shelf 02. Need Assistance",
      "Scanned_location": "",
      "Validation": ""
    },
    
  ];
  constructor(productcartApi:ProductcartApiService){
    productcartApi.getPost().subscribe((data)=>{
      console.warn(data)
    })
   }
  ngOnInit():void{
  
  }

}
