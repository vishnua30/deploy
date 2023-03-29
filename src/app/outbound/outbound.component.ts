import { Component } from '@angular/core';
import {  Location} from "../Location";
import { OutExtraComponent } from '../out-extra/out-extra.component';
import { OutboundapiService } from './outboundapi.service';


@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.css']
})
export class OutboundComponent {

  outExtraComponent: any =new OutExtraComponent();
  product_name!:string;
  product_no!:any;
  dellivey!:any;
  list!:any

  constructor(public outboundapi:OutboundapiService)
  {
    outboundapi.getPost().subscribe((data)=>{
      console.warn(data)
    })
  }
  submit(obj:any)
  {
    this.outboundapi.post(obj).subscribe((data)=>
    {
        this.list=JSON.stringify(data)
      console.warn(data)
    })
   console.log(obj)
 
  }
 
}
