import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/Model/task';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  
  
  tareas:Task[];
  

  constructor(private service:ServiceService, private router:Router) { }

  tarea:Task=new Task();

  Guardar(){
    this.service.createTask(this.tarea).subscribe(data=>{
      alert("Se añadió al tarea!");
     
      window.location.reload();

      this.router.navigate(["listar"]);

      
    })
  }

  Inicio(){
    this.router.navigate([""])
  }


  ngOnInit(): void {
    this.service.getTasks().subscribe(data=>{
      this.tareas=data;
    })
  }

  Editar(tarea:Task):void{
    localStorage.setItem("id",tarea.id.toString());
    this.router.navigate(["editar"])

  }

  Delete(tarea:Task):void{
    this.service.deleteTask(tarea).subscribe(data=>{
      this.tareas=this.tareas.filter(p=>p!==tarea);
    })

  }

  Actualizar(tarea:Task){
    localStorage.setItem("id",tarea.id.toString());
    
    let id=localStorage.getItem("id");
    this.service.getTaskId(+id).subscribe(data=>{
    
      if(tarea.status=="No Completado"){
        data.status="Completado"
        tarea.status="Completado"
        
      }else if(tarea.status=="Completado"){
        data.status="No Completado"
        tarea.status="No Completado"
        
      }
      this.service.updateTask(tarea).subscribe(data=>{
        this.tarea=data;
      })
    })


    

    
  }

  

}
