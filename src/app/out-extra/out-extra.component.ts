import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-out-extra',
  templateUrl: './out-extra.component.html',
  styleUrls: ['./out-extra.component.css']
})
export class OutExtraComponent {

  Delivery_loc:any;
  @Output() delivery:EventEmitter<Location>=new EventEmitter();
  delivery_loc:any
  submit(obj:any)
  {
    this.Delivery_loc=obj
    console.log(obj)
    
  }
}
