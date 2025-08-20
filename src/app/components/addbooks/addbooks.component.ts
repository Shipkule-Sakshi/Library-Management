import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Book {
  name: string;
  author: string;
  type: string;
}

@Component({
  selector: 'app-addbooks',
  standalone: true,
  imports: [FormsModule,CommonModule],  // ✅ This is required for [(ngModel)]
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent {
  books: Book[] = [];
  bookName: string = '';
  author: string = '';
  type: string = 'Fiction';
  searchQuery: string = '';
  filteredBooks: Book[] = [];
 
  // ✅ Inject HttpClient
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
     this.loadBooks();
  }
  // ✅ Load books from Spring Boot backend
  loadBooks(): void {
    this.http.get<Book[]>('http://localhost:8080/api/books')
      .subscribe({
        next: (data) => {
          this.books = data;
          this.filteredBooks = [...this.books];
        },
        error: (err) => console.error('Error fetching books:', err)
      });
  }
  addBook(): void {
    if (this.bookName.trim() && this.author.trim()) {
      const newBook: Book = {
        name: this.bookName.trim(),
        author: this.author.trim(),
        type: this.type
      };
       // ✅ Save to backend instead of localStorage
      this.http.post<Book>('http://localhost:8080/api/books', newBook)
        .subscribe({
          next: (book) => {
            alert('✅ Book added successfully!');
            this.books.push(book);
            this.clearForm();
            this.searchBooks();
          },
           error: (err) => console.error('Error saving book:', err)
        });
    }
  }

  clearForm(): void {
    this.bookName = '';
    this.author = '';
    this.type = 'Fiction';
  }
  searchBooks(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  }
}