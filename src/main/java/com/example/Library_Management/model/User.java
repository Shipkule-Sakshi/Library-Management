package com.example.Library_Management.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;
    
    @Column(name = "fullname", nullable = false)
    private String fullname;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role", nullable = false)
    private String role;

    

    // No-args constructor (required by JPA)
    public User() {}

    // Parameterized constructor
    public User(String email, String fullname, String password, String role) {
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.role = role;
        
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

      public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

   public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    
    @Override
    public String toString() {
        return "User{id=" + id + ", email='" + email + '\'' +
               ", fullname='" + fullname + '\'' + ", role='" + role + '\'' + '}';
    }
}
