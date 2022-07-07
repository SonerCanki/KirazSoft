import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import{LoginService} from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router ) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
  });
  isUserValid:boolean=false;
loginSubmited(){
  this.loginService
      .Login([this.loginForm.value.email!,this.loginForm.value.password!])
      .subscribe(res=>{
          if(res=='Error'){
            this.isUserValid=false;
            alert('Login UnSuccesfull');
          }else{
            this.router.navigate(['/content']);
            this.isUserValid=true;
            alert('Login succesfull');
            
          }
        }
      );
}

  get Email():FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get Password():FormControl{
    return this.loginForm.get('password') as FormControl;
  }

}
