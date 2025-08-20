import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,   // ✅ keep this
  imports:[FormsModule,RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      alert(`🔍 Searching for: ${this.searchQuery}`);
      // You can implement real search logic here
    } else {
      alert('❌ Please enter a search query.');
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    sessionStorage.clear();
    alert('✅ You have successfully logged out!');
    this.router.navigate(['/home']);
  }
}
