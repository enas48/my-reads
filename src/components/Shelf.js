import React from 'react'
import Book from './Book.js';

class Shelf extends React.Component {
 render() {
   const {shelf, updateShelf}=this.props;
    return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
								{this.props.books.map(book=>{
                                 if(book.shelf === shelf.value){
                        			return	<Book 
                                   				key={book.id} 
												book={book}
												onHandleChange={updateShelf}/>
										}
                                    return false;
                                }
                                 )}
                  		
                    </ol>
                  </div>
                </div>
    )}
}

export default Shelf