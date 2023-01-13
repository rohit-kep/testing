import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import './form.css'

export default class Form extends Component {
  render() {
    return (
      <div className='form'>
        <SearchBar className={this.props.className} getCountryName = {this.props.getCountryName} changePage={this.props.changePage}></SearchBar>
        <Filter className={this.props.className} getCurrentRegion={this.props.getCurrentRegion}></Filter>
      </div>
    )
  }
}
