import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import {AuthenticationService } from 'src/app/Service/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=""
  password=""
  invalidLogin=false

  constructor(private router:Router,private service:ServiceService,public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  Logear(){
    this.router.navigate(['listar'])
  }

  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['listar'])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

}
