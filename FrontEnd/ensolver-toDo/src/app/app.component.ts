import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './Model/task';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';

  constructor(private router:Router,private service:ServiceService){}
  
  
  Inicio(){
    this.router.navigate([""])
  }

  Listar(){
    this.router.navigate(["listar"])
  }




}
