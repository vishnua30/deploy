import { Component } from '@angular/core';
import { TruckCompService } from './truck-comp.service';

@Component({
  selector: 'app-truck-comp',
  templateUrl: './truck-comp.component.html',
  styleUrls: ['./truck-comp.component.css']
})
export class TruckCompComponent {

  public isChecked = true;
  public check = !true;
  toggle:boolean=false;
  constructor(public truckapi:TruckCompService){}
  toggleswitch()
  {
    this.toggle=!this.toggle;

  }

  toggles:boolean=false;
  toggleswitchs()
  {
    this.toggles=!this.toggles;
  }

  tog:boolean=false;
  togswitchs()
  {
    this.tog=!this.tog;
  }
  ngOnInit(): void {
  }
  trucks =
    [{tId: 100, tNo: 'KA 01 NA 5010', dId: 1011,lNo:'KA01 24812387',pNo:'77786489337',rpm:'100'},
    {tId: 101, tNo: 'KA 03 MH 5012', dId: 1012,lNo:'KA03 12892387',pNo:'7898789678',rpm:'200'},
    {tId: 102, tNo: 'KA 53 NL 5011', dId: 1013,lNo:'KA53 90892387',pNo:'9087689065',rpm:'150'},
    {tId: 103, tNo: 'KA 02 AP 50013', dId: 1014,lNo:'KA02 24892675',pNo:'8789067864',rpm:'300'},
   ]
status="In transist"
    
getPost()
{
  this.truckapi.getPost().subscribe((data)=>
  {
    console.log(data)
  })
}
submit(data:any)
{
  this.truckapi.post(data).subscribe((data)=>{
    console.log(data)
  })
}


}


