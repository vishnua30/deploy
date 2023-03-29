import { Component, OnInit } from '@angular/core';
import { RelocationApiService } from './relocation-api.service';

@Component({
  selector: 'app-relocation',
  templateUrl: './relocation.component.html',
  styleUrls: ['./relocation.component.css']
})
export class RelocationComponent implements OnInit{

  
  customLocation!:Location[];
  localItem:any;
  

  constructor(private relocApi:RelocationApiService){
    // 
    // this.localItem=localStorage.getItem("customLocation")
    // if(this.localItem==null)
    // {
    //   this.customLocation=[];
    
    // }
    // else{
    //   this.customLocation=JSON.parse(this.localItem)
    // }
    relocApi.getPost().subscribe((data)=>
    {
      console.warn(data)
    })
    
    
  }
submit(obj:any)
{
  this.relocApi.postData(obj).subscribe((data:any)=>console.log(data))
  console.log(obj)
}

  ngOnInit(): void {
    
  }
//   onClickSubmit(data: any) {
//     console.log("Entered Email id : " + data);
//  }
 
 addManulEntry(location:Location)
 {
  console.log(location)
  this.customLocation.push(location)
  localStorage.setItem("customLocation",JSON.stringify(this.customLocation))
 }


}
