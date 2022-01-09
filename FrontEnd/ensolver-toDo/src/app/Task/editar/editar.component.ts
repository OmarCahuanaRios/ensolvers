import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Model/task';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  

  tarea:Task=new Task()

  

 

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    
    let id=localStorage.getItem("id");
    
    this.service.getTaskId(+id).subscribe(data=>{
      this.tarea=data;
      
    })
  }

  Actualizar(tarea:Task){
    this.service.updateTask(tarea).subscribe(data=>{
      this.tarea=data;
      alert("Se actualizaron los datos");
      this.router.navigate(["listar"]);
      
    })

  }

}
