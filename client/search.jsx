// import { Component } from "react";
import React from "react";
const {aj} = require('./mapsAPI.js');

class Search extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          searchKeyWord : ''
      }
      this.search = this.search.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    

    onChange(event){
      let place = event.target.value;
      this.setState({searchKeyWord:place});
    }
    search(){
      console.log('hey');
      aj.post(this.state.searchKeyWord, this.props.onSearch);
    }

    render() {
    return (
        <div>
          <form action="">  
            <label>Place: 
              <input type="text" value = {this.state.searchKeyWord} onChange={this.onChange}/>
            </label>
            <button type ="button" onClick = {this.search}>Search</button>
          </form> 
        </div>
      );
    }
  }

  export default Search;  