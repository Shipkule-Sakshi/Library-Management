import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-faculty-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.css']
})
export class FacultyLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(event: Event) {
    event.preventDefault(); // prevent form submission from navigating
    if (this.email.trim() && this.password.trim()) {
      alert(`✅ Logged in as ${this.email}`);
      this.router.navigate(['/home']); // navigate to home after login
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
