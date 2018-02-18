// import { Component } from "react";
import React from "react";

class PlaceEntry extends React.Component {
    render() {
    return (
        <div>
          <h3>{this.props.place.name}</h3>
          <span>{`Rating: ${this.props.place.stars}`}</span>
          <p>{this.props.place.address}</p>
        </div>
      );
    }
  }

  export default PlaceEntry;