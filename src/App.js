import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css';
import {Route} from "react-router-dom";
import Home from './components/Home.js';
import Search from './components/Search.js';

class BooksApp extends React.Component {
  state = {
	books:[],
    shelves:[{name:'Currently Reading', value:'currentlyReading'},
                  {name:'Want to Read',value:'wantToRead'},
                  {name:'Read', value:'read'}]
  }
  updateShelf=(book, shelf)=>{
   BooksAPI.update(book, shelf).then(()=>                                   
       this.setState(state=>({books:[...state.books.filter(b=>b.id!==book.id),{...book,shelf:shelf}]}))
   )

  }
componentDidMount(){
 BooksAPI.getAll().then(books=>this.setState({books}))
}
  render() {
    return (
      <div className="app">
   <Route exact path="/">
                    <Home books={this.state.books}   
  						  shelves={this.state.shelves}
  						  updateShelf={this.updateShelf}/>
                </Route>
                <Route path="/search">
                    <Search books={this.state.books} updateShelf={this.updateShelf}/>
                </Route>  
      </div>
    )
  }
}

export default BooksApp
