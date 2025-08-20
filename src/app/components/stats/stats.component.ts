import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from '../../services/user.service'; // ✅ Import UserService & User interface

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  registrations: User[] = [];
  totalStudents: number = 0;
  totalFaculties: number = 0;

  constructor(private userService: UserService) { } // ✅ Only inject UserService

  ngOnInit(): void {
    // Fetch users from backend API
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.registrations = users;
        this.updateCounts();
      },
      (err: any) => {
        console.error('Error fetching users:', err);
      }
    );
  }

  saveUser(user: User): void {
    this.userService.registerUser(user).subscribe({
      next: (res: User) => {
        alert('✅ User updated successfully!');
        this.updateCounts();
      },
      error: (err: any) => alert('❌ Error updating user.')
    });
  }

  removeUser(id: number | undefined): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          alert('✅ User deleted!');
          this.registrations = this.registrations.filter(u => u.id !== id);
          this.updateCounts();
        },
        error: (err: any) => alert('❌ Error deleting user.')
      });
    }
  }

  updateCounts(): void {
    this.totalStudents = this.registrations.filter(u => u.role === 'Student').length;
    this.totalFaculties = this.registrations.filter(u => u.role === 'Faculty').length;
  }
}
