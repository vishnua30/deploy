import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from "../Location";
import { AutosuggestApiService } from './autosuggest-api.service';
@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.css']
})
export class AutosuggestComponent {
Rack!:number;
Shelf!:number;
comment!:string;
constructor(private autoapi:AutosuggestApiService){
  // autoapi.getPosts().subscribe((data)=>
  // {
  //   console.warn(data)
  // })
}

@Output() toaddCustomLoc:EventEmitter<Location>=new EventEmitter();
// submitRack(obj:any){
    
//     // const customLocation={
//     //   sno:77,
//     //   Rack:this.Rack,
//     //   Shelf:this.Shelf,
//     //   active:true
//     // }
//     // console.warn(obj)

//     // this.toaddCustomLoc.emit(customLocation)
//     console.log(obj)
//   }
  submitRack(obj:any)
  {
    this.Rack=obj
  }
  submitComment(obj:any)
  {
    console.log(obj)
    this.comment=obj
  }
  submitShelf(obj:any)
  {
    this.Shelf=obj
  }
  submitq()
  {
    const LocInfo=[
      {
        rack:this.Rack,
        shelf:this.Shelf,
        comment:this.comment
      }
    ]
    console.log(LocInfo)
    this.autoapi.post(LocInfo).subscribe((data)=>
    {
      console.warn(data)
    })

  }
}
