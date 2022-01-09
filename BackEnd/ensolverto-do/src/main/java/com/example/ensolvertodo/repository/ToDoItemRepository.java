package com.example.ensolvertodo.repository;


import com.example.ensolvertodo.model.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ToDoItemRepository extends JpaRepository<ToDoItem,Long> {
    Optional<ToDoItem> findById(Long id);
    void deleteById(Long id);
}
