import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import {  Location} from "../../app/Location";
import { ManualentryService } from './manualentry.service';
import { RelocationApiService } from "../relocation/relocation-api.service";
import { PlaceAvailComponent } from "../place-avail/place-avail.component";
@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit{
  title = 'demo';
  name='hi';
  locations!: Location[];
  @Input() location:Location=new Location()
  // @Output() todoTempBloc:EventEmitter<Location>=new EventEmitter();
 
  

  constructor(public appapi:ManualentryService){
    this.locations = [
    
      {sno:1, Rack:  53, Shelf :240, active:true},
      {sno:2, Rack:  33, Shelf :202, active:false},
      {sno:3, Rack:  63, Shelf :204, active:true},
      {sno:4, Rack:  50, Shelf :820, active:true},
      {sno:5, Rack:  5, Shelf :50, active:false},
      {sno:6, Rack:  53, Shelf :25, active:true},
      {sno:7, Rack:  83, Shelf :23, active:false},
      {sno:8, Rack:  99, Shelf :20, active:true},
      
    ];

    // appapi.getPost().subscribe((data)=>
    // {
    //   console.warn(data)
    // })
    
  }
  ngOnInit(): void {
      
  }
  data:any;
  
  toggleComp(location:Location)
  {
   if(location.active==true)
   {
    let index=this.locations.indexOf(location)
    this.locations[index].active=!this.locations[index].active
   }
    console.log(location)
    // this.appapi.posts(location).subscribe((data)=>
    // {
    //   this.data=data
    //   console.warn(data)
    // })
  }
  submit(data:any)
  {
    console.log(data)
    this.appapi.posts(this.data).subscribe((data)=>
    {
      console.warn(data)
    })
    
  }

  
  
}
