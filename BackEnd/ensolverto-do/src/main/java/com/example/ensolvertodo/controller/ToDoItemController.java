package com.example.ensolvertodo.controller;


import com.example.ensolvertodo.model.ToDoItem;
import com.example.ensolvertodo.service.ToDoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins="http://localhost:4200",maxAge = 3600)
@CrossOrigin(origins="https://todo-task-front-heroku.herokuapp.com/",maxAge = 3600)
@RestController
@RequestMapping("/")
public class ToDoItemController {
    @Autowired
    ToDoItemService service;

    @GetMapping()
    public List<ToDoItem> listar(){
        return service.listar();
    }

    @GetMapping(path={"/{id}"})
    public Optional<ToDoItem> listarPorId(@PathVariable("id") Long id){
        return service.listarId(id);
    }

    @PostMapping
    public ToDoItem agregar(@RequestBody ToDoItem task){
        return service.Agregar(task);

    }
    @PutMapping(path="/{id}")
    public ToDoItem editar(@PathVariable("id") Long id, @RequestBody ToDoItem task){
        task.setId(id);
        return service.editar(task);
    }
    @DeleteMapping(path = "/{id}")
    public Optional<ToDoItem> delete(@PathVariable("id") Long id){
        return service.delete(id);
    }


}
