import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Login function
  login(event: Event) {
    event.preventDefault(); // stop form default submission
    if (this.email.trim() && this.password.trim()) {
      alert(`✅ Logged in as ${this.email}`);
      this.router.navigate(['/home']);
    } else {
      alert('❌ Please enter both email and password.');
    }
  }

  // Navigate to Forgot Password page
  goToForgotPassword(event: Event) {
    event.preventDefault(); // stop link default behavior
    this.router.navigate(['/forgot-password']);
  }
}
