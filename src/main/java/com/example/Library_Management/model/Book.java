package com.example.Library_Management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String author;
    private String type;

    // No-args constructor (required by JPA)
    public Book() {}

    // Parameterized constructor (optional)
    public Book(String name, String author, String type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    // Optional: For debugging
    @Override
    public String toString() {
        return "Book{id=" + id + ", name='" + name + '\'' +
               ", author='" + author + '\'' + ", type='" + type + '\'' + '}';
    }
}
