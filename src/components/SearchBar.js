import React from 'react';
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state={searchTerm:''}
  handleChange=(e)=>{
    this.setState({searchTerm:e.target.value})
    this.props.onHandleChange(e.target.value);
  }
 render() {
    return (
       <div className="search-books-bar">
      		<Link to="/">
              <div className="close-search">Close</div>
      		</Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Search by title or author"/>
              </div>
            </div>
          )}}

export default SearchBar