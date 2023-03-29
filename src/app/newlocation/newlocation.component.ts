import { Component } from '@angular/core';
import { Dimension } from "../Dimension";
import { NewLocApiService } from './new-loc-api.service';

@Component({
  selector: 'app-newlocation',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewlocationComponent  {

  newLocation:any;
  constructor(public appNewloc:NewLocApiService){
      appNewloc.getPost().subscribe((data)=>{
          this.newLocation=data;
          console.warn(data)
      })

      
  }
  getLocation(data:any)
  {
     this.appNewloc.getPost().subscribe((res)=>
     {
      console.warn(res)
     })
  }
  
  ngOnInit(): void {
      
  }
  obj:any
  add(data:any){
    console.log(data)
    this.appNewloc.post(data).subscribe((data)=>
      {
          console.warn(data)
      })
    alert("New Location Added Succesfully");
  }
}
