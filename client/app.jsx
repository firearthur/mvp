// import { Component } from "react";
import React from "react";
import Search from './search.jsx';
import PlacesList from './placesList.jsx';
const {aj} = require('./mapsAPI.js');

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          places : []
      }
      this.setPlaces = this.setPlaces.bind(this);
    }
    
    setPlaces(term){
      let thisComponent = this;
      console.log('i ran inside of set places');
      aj.get(term, (places)=>{
        thisComponent.setState({places:places});
      });
    } 

    render() {
    return (
        <div>
          <h1>Places Around HR</h1>
          <Search onSearch = {this.setPlaces}/>    
          <PlacesList places = {this.state.places} />
        </div>
      );
    }
  }

  export default App;