import { Component } from "react";

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          places : []
      }
      this.setPlaces = this.setPlaces.bind(this);
    }
    
    setPlaces(places){
       this.setState({places:places});
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