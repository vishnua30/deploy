import { Component, OnInit} from '@angular/core';
import {  Location} from "../Location";
import { OutLocApiService } from "./out-loc-api.service";

@Component({
  selector: 'app-out-location',
  templateUrl: './out-location.component.html',
  styleUrls: ['./out-location.component.css']
})
export class OutLocationComponent implements OnInit{
  title = 'demo';
  list!:any
  locations:Location[]= [
    {sno:1, Rack:  53, Shelf :240, active:true},
    {sno:2, Rack:  33, Shelf :202, active:false},
    {sno:3, Rack:  63, Shelf :204, active:true},
    {sno:4, Rack:  50, Shelf :820, active:true},
    {sno:5, Rack:  5, Shelf :50, active:false},
   
    
  ];
 

  constructor(private outLocApi:OutLocApiService){
    outLocApi.getPosts().subscribe((data)=>
    {
      console.warn(data)
    })
  }
  ngOnInit(): void {
      
  }
  submit(obj:any)
  {
    console.log(obj)
  }
  toggleComp(location:Location)
  {
   
    let index=this.locations.indexOf(location)
    this.locations[index].active=!this.locations[index].active
   
    console.log(location)

    this.outLocApi.post(location).subscribe((data)=>
    {
      this.list=JSON.stringify(data)
      console.warn(this.list)
    })
  }
}