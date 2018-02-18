import React from 'react';
import PlaceEntry from './placeEntry.jsx';

class PlacesList extends React.Component {

    render(){
        console.log(this.props);
        return( // check this
          this.props.places.map((place)=>{
            return <PlaceEntry place = {place} key = {place._id}/>
          })            
        );
    }
}

export default PlacesList;