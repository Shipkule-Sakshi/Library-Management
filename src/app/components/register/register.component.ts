import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // ✅ import HttpClientModule
import { CommonModule } from '@angular/common';

interface User {
  fullname: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // ✅ include HttpClientModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  fullname: string = '';
  password: string = '';
  confirm_password: string = '';
  role: string = '';

  private apiUrl = 'http://localhost:8080/api/users'; // ✅ backend endpoint

  constructor(private http: HttpClient) {}

  register() {
    // Password match check
    if (this.password !== this.confirm_password) {
      alert('❌ Passwords do not match!');
      return;
    }

    // Create user object
    const user: User = {
      email: this.email,
      fullname: this.fullname,
      password: this.password,
      role: this.role
    };

    // ✅ Send to Spring Boot backend
    this.http.post<User>(this.apiUrl, user).subscribe({
      next: (response) => {
        console.log('✅ User saved:', response);
        alert('Registration Successful!');

        // Reset form
        this.email = '';
        this.fullname = '';
        this.password = '';
        this.confirm_password = '';
        this.role = '';
      },
      error: (err) => {
        console.error('❌ Error saving user:', err);
        alert('Error saving user. Please try again.');
      }
    });
  }
}
