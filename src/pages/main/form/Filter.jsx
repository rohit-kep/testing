import React, { Component } from 'react'

export default class Filter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedRegion:'',
    }
  }
  handleSelection = (e)=>{
      this.setState({selectedRegion: e.target.value});
        this.props.getCurrentRegion(e.target.value);
    }
  
  
  

  render() {
    
    return (
      <span className= {this.props.className + ' filter'}>
      
      <label className='filterLabel' htmlFor="region">Filter by Region</label>
      
      <select name="region" id="region" value={this.state.selectedRegion} onChange={this.handleSelection}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      </span>
    )
  }
}
