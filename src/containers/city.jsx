import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render(){

    const props = this.props;
    let containerClasses = "list-group-item";

    if (this.props.city === this.props.selectedCity) {
      containerClasses += " selected";
    }

    return(
      <div className={containerClasses} onClick={this.handleClick}>
        <h1>{this.props.city.name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { selectCity: selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
