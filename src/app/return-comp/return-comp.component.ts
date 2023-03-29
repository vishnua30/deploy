import { Component,OnInit } from '@angular/core';
import { RetrunapiCompService } from './retrunapi-comp.service';

@Component({
  selector: 'app-return-comp',
  templateUrl: './return-comp.component.html',
  styleUrls: ['./return-comp.component.css']
})
export class ReturnCompComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(public returnapi:RetrunapiCompService){}

  submit(data:any)
  {
    
    this.returnapi.postData(data).subscribe((data)=>
    {
      console.warn(data)
    })
    
  }

    
  
}
