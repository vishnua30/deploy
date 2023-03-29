import { Component } from '@angular/core';
import { SafetystockService } from './safetystock.service';

@Component({
  selector: 'app-safetystockind',
  templateUrl: './safetystockind.component.html',
  styleUrls: ['./safetystockind.component.css']
})
export class SafetystockindComponent {

  data =[
    {
      "S_No":1,
      "p_name":"Shampoo",
      "p_code":1123,
      "p_minstock":1000,
      "p_thrdefined":1050,
      "currentstock":999
    },
    {
      "S_No":2,
      "p_name":"Table",
      "p_code":1123,
      "p_minstock":1000,
      "p_thrdefined":1050,
      "currentstock":999
    },
    {
      "S_No":3,
      "p_name":"Chair",
      "p_code":1123,
      "p_minstock":1000,
      "p_thrdefined":1050,
      "currentstock":999
    }
  ];
  constructor(private saftyApi:SafetystockService){ 
    saftyApi.getPost().subscribe((data)=>{
      console.warn(data)
    })
  }
  ngOnInit():void{
    
  }
  
}
