import { Component } from "react";

class PlaceEntry extends Component {
    render() {
    return (
        <div>
          <h3>{this.props.place.name}</h3>
          <span>{this.props.place.rating}</span>
          <p>{this.props.place.address}</p>
        </div>
      );
    }
  }