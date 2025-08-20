package com.example.Library_Management.service;

import java.util.List;
import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.example.Library_Management.model.User;
import com.example.Library_Management.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository repo;

    // ✅ Constructor injection
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    /**
     * Fetch all users from the database.
     *
     * @return List of User objects
     */
    public List<User> findAll() {
        return repo.findAll();
    }

    /**
     * Fetch a user by their email.
     *
     * @param email Email of the user
     * @return Optional containing User if found, otherwise empty
     */
    public Optional<User> findByEmail(String email) {
        return repo.findByEmail(email);
    }

    /**
     * Save or update a user in the database.
     *
     * @param user User object to save
     * @return The saved User object
     * @throws IllegalArgumentException if user is null
     * @throws DataIntegrityViolationException if email already exists
     */
    public User save(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User must not be null");
        }

        // ✅ Prevent duplicate email registration
        Optional<User> existingUser = repo.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new DataIntegrityViolationException("Email already exists: " + user.getEmail());
        }

        return repo.save(user);
    }

    public Optional<User> findById(Long id) {
    return repo.findById(id);
}

public void deleteById(Long id) {
    repo.deleteById(id);
}

}
