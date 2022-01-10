import React from 'react'
import SearchBar from './SearchBar.js';
import SearchedBooks from './SearchedBooks.js';
 import * as BooksAPI from '../BooksAPI';

class Search extends React.Component {
  state={books:[]};

  handleChange=(term)=>{
    if(term!==''){
          BooksAPI.search(term).then(books=>{
           if(books.length || !books.items){
            const allBooks = this.props.books;
            const setBooksShelf = books.map((book) => {
                book.shelf = 'none';
                allBooks.forEach((b) => {
                    if (b.id === book.id) {
                        book.shelf = b.shelf
                    }
                })
                return book
            }) 
            this.setState({books: setBooksShelf}) 	
           }else{
   		  		 this.setState({books:[]})
           }
    })   
    }else{
          this.setState({books:[]})
    }
                       
  }
 render() {
    return (
      <div className="search-books">
           	<SearchBar onHandleChange={this.handleChange}/>
            <SearchedBooks books={this.state.books} updateShelf={this.props.updateShelf}/>
          </div>
    )}}

export default Search