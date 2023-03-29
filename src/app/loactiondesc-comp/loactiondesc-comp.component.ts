import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Location} from "../../app/Location";
import { LocationdescApiService } from "./locationdesc-api.service";
import { RelocationApiService } from "../relocation/relocation-api.service";
@Component({
  selector: 'app-loactiondesc-comp',
  templateUrl: './loactiondesc-comp.component.html',
  styleUrls: ['./loactiondesc-comp.component.css']
})
export class LoactiondescCompComponent {

  @Input() location:Location=new Location;
  @Input() i!:number;
  @Output() tempBloc:EventEmitter<Location>=new EventEmitter();
  list=new Array()
  // onCheckbox()
  // {
  //   console.log("hii")
  //   console.log(this.location)
   
   
  
  //   console.log(this.location)
  // }
  
  constructor(public locdescapi:RelocationApiService)
  {
    // // locdescapi.getPosts().subscribe((data)=>{
    // //   console.log(data)
    // })
  }
  tempBlock(location:Location)
  {
    // if(loc.active==false)
    // {
    // let index=this.locations.indexOf(loc)
    // this.locations[index].active=!this.locations[index].active
    // }
    
    console.log("Checked");
    this.tempBloc.emit(location);
    console.log("inside loc dexc")
    // console.log(location)
    this.list.push(location)
   
    
  }
  
}
