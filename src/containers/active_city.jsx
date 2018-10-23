import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="active-city">
        <h1>{this.props.selectedCity.name}</h1>
        <h2>{this.props.selectedCity.address}</h2>
        <img src={"https://kitt.lewagon.com/placeholder/cities/" + this.props.selectedCity.slug} alt=""/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}
export default connect(mapStateToProps)(ActiveCity);


