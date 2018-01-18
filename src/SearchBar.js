import React from 'react';

const SearchBar = (props) => {
console.log("search", props.searchTerm)
  return (
    <form onChange={props.handleSearch} value={props.searchTerm} className="navbar-form navbar-right" action="/action_page.php">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search"/>
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar;
