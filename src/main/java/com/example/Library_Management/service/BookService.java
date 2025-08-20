package com.example.Library_Management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Library_Management.model.Book;
import com.example.Library_Management.repository.BookRepository;

@Service
public class BookService {

    private final BookRepository repo;

    // Constructor injection
    public BookService(BookRepository repo) {
        this.repo = repo;
    }

    /**
     * Fetch all books from the database.
     * @return List of books
     */
    public List<Book> findAll() {
        return repo.findAll();
    }

    /**
     * Save a new book or update an existing one.
     * @param book Book object to save
     * @return Saved book
     */
    public Book save(Book book) {
        return repo.save(book);
    }
}
