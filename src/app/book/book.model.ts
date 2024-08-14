export interface Book {
  id: number | null | undefined;
  title: string;
  author: string;
  genre: string;
  isbn: string;
}

export class BookImpl implements Book {
  id: number | null | undefined;
  title: string;
  author: string;
  genre: string;
  isbn: string;

  constructor(title: string, author: string, genre: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
  }
}
