import React from 'react'
import { Link } from "react-router-dom";
import Shelf from './Shelf.js';

function Home(props) {

    return (
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
     			 {props.shelves.map(shelf=> 	
      					<Shelf key={shelf.name} 
  								shelf={shelf} 
  								books={props.books}
  								updateShelf={props.updateShelf}/>
  				)}
              </div>
            </div>
			
            	<div className="open-search">
					<Link to="/search">Add a book</Link> 
				</div>
			
          </div>
    )
}

export default Home