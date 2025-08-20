import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  email: string = '';

  sendResetLink() {
    if (this.email.trim()) {
      alert(`📤 Reset link sent to ${this.email}`);
      this.email = '';
    } else {
      alert('❌ Please enter your email.');
    }
  }
}
