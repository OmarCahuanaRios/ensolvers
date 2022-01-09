import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Task } from '../Model/task'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='https://todo-task-back-heroku.herokuapp.com'

  getTasks(){
    return this.http.get<Task[]>(this.Url);
  }

  createTask(tarea:Task){
    return this.http.post<Task>(this.Url,tarea);
  }

  getTaskId(id:number){
    
    return this.http.get<Task>(this.Url+"/"+id);
  }

  updateTask(tarea:Task){
    
    return this.http.put<Task>(this.Url+"/"+tarea.id,tarea);
    
  }

  deleteTask(tarea:Task){
    return this.http.delete<Task>(this.Url+"/"+tarea.id);
  }


}
