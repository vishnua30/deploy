import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginapiService } from './loginapi.service';



@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

  requiredForm!: FormGroup;
   constructor(private loginapi: LoginapiService) {
      
   }

   //Create required field validator for name
   submit(data:any) {
      
      console.log(data)
   }
   ngOnInit()
   {

   }
   getPost()
   {
    this.loginapi.getPosts().subscribe((data)=>console.log(data))
   }
   posts(data:any)
   {
    this.loginapi.post(data).subscribe((data)=>console.log(data))
   }

}
