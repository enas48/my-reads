import React from 'react'
import Book from './Book.js';

function SearchedBooks(props){
 const {books, updateShelf}=props
    return (
            <div className="search-books-results">
              <ol className="books-grid">
      			{books.length !== 0?  books.map(book=>
          	<Book key={book.id} book={book} onHandleChange={updateShelf}/>) :''}
      			</ol>
            </div>      
    )
}

export default SearchedBooks