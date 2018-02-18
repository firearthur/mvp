import {Component} from 'react';
import PlaceEntry from './placeEntry.jsx';

class PlacesList extends Component {

    render(){

        return( // check this
          this.props.places.map((place)=>{
            return <PlaceEntry place = {this.props.place} key = {this.props.place._id}/>
          })            
        );
    }
}

export default PlacesList;