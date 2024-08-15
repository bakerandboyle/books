import {Book, BookImpl} from './book.model';

describe('BookModel', () => {
  it('should create an instance', () => {
    expect(new BookImpl("Hitchiker's guids to the galaxy", "Douglas Adams", "Science Fiction", "9780060735256")).toBeTruthy();
  });
});
