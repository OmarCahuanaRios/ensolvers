package com.example.ensolvertodo.service;



import com.example.ensolvertodo.model.ToDoItem;

import java.util.List;
import java.util.Optional;

public interface ToDoItemService {

    List<ToDoItem> listar();
    ToDoItem Agregar(ToDoItem task);
    Optional<ToDoItem> listarId(Long id);
    ToDoItem editar(ToDoItem task);
    Optional<ToDoItem> delete(Long id);
}
