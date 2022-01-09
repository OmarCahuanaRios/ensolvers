package com.example.ensolvertodo.service.implementation;


import com.example.ensolvertodo.model.ToDoItem;
import com.example.ensolvertodo.repository.ToDoItemRepository;
import com.example.ensolvertodo.service.ToDoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ToDoItemServiceImplementation implements ToDoItemService {

    @Autowired
    private ToDoItemRepository _repository;

    @Override
    public List<ToDoItem> listar(){
        return _repository.findAll();

    }

    @Override
    public ToDoItem Agregar(ToDoItem task){
        return _repository.save(task);
    }

    @Override
    public Optional<ToDoItem> listarId(Long id){
        return _repository.findById(id);

    }

    @Override
    public ToDoItem editar(ToDoItem task){
        return _repository.save(task);
    }

    public Optional<ToDoItem> delete(Long id){
        Optional<ToDoItem> tarea=_repository.findById(id);

        if(tarea.isPresent()){
            _repository.deleteById(id);
        }
        return tarea;
    }



}
