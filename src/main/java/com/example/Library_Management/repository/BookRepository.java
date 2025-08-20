package com.example.Library_Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Library_Management.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
