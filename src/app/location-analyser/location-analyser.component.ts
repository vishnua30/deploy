import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Location} from "../Location";
import { LocationAnalyserApiService } from './location-analyser-api.service';

@Component({
  selector: 'app-location-analyser',
  templateUrl: './location-analyser.component.html',
  styleUrls: ['./location-analyser.component.css']
})
export class LocationAnalyserComponent implements OnInit{

  locations!: Location[];
  
  loc:any
  @Input() location:Location=new Location()
  @Output() tempBl:EventEmitter<Location>=new EventEmitter();
  list: any;
  constructor(private locationapi:LocationAnalyserApiService)
  {
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
    // locationapi.getPosts().subscribe((data)=>{
    //   console.log(data)
    // })
      
  }
 
  
  // submit(obj:any)
  // {
  //   console.log(obj)
  // }

  // Check()
  // {
  //   console.log("Checked");
    
  // }
  data:any
  toggleComp(location:any)
  {
    
    let index=this.locations.indexOf(location)
    this.locations[index].active=!this.locations[index].active
    console.log("inside toogle")
    console.log(location)
   this.data=location;



   
    // let index=this.locations.indexOf(location)
    // this.locations[index].active=!this.locations[index].active
   
    // console.log(location)
    
  }
  submit()
  {
    this.locationapi.post(this.data).subscribe((data)=>{
      this.loc=JSON.stringify(data)
      console.warn(data)

    })
    this.tempBl.emit(this.data)
  }

 ngOnInit(): void {
   
 }
}
