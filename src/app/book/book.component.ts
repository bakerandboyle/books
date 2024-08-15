import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  newBook: Book = { id: 0, title: '', author: '', genre: '', isbn: '' };

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(book => {
      this.books.push(book);
      this.newBook = { id: 0, title: '', author: '', genre: '', isbn: '' };
    });
  }
}
