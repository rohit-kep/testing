import React, { Component } from 'react'
import {FaSearch}  from 'react-icons/fa'


export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       countryName:''
    }
  }
  handleChange= (e)=>{
    this.setState({countryName:e.target.value})

  }
  
handleClick = ()=>{
   this.props.getCountryName(this.state.countryName);
   this.props.changePage();
}
  render() {
    
    return (
        <span className={ this.props.className + ' searchBar'}>
          <FaSearch onClick={this.handleClick}  className='searchIcon'></FaSearch>
          <input  type="text" placeholder=' Search for a country...' id='search' name='search' value={this.state.countryName} onChange={this.handleChange}/>
        </span>
    )
  }
}
