import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string;
  constructor( private http : HttpClient) {
   this.url ="http://localhost:5000/api/login/";  
   }

   Login(loginInfo : Array<string>){  
   return this.http.post(this.url,{
      Email:loginInfo[0],
      Password:loginInfo[1]
   },
   {
    responseType:'text'
   });  
  }  
}

