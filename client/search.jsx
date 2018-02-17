import { Component } from "react";

class Search extends Component {
    constructor(props){
      super(props);
      this.state = {
          searchKeyWord : ''
      }
      this.search = this.search.bind(this);
    }

    search(event){
      let place = event.target.value;
      this.props.onSearch(); //check this part  
    }

    render() {
    return (
        <div>
          <form action="">  
            <label>Place: 
              <input type="text" value = {this.state.searchKeyWord} onChange={this.search}/>
            </label>
            <input type="submit" value="Submit" />
          </form> 
        </div>
      );
    }
  }