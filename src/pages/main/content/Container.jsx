import React, { Component } from 'react'
import CountryCard from './CountryCard'
import './container.css'


export default class Container extends Component {
    constructor(props){
        super(props);
        this.state={
          countries:[],
          
        }
    }
  
    componentDidUpdate(prevProps){

      if(prevProps.currentRegion !==  this.props.currentRegion){
        this.updateCountries(this.props.currentRegion);
      }

    }

    componentDidMount(){

      this.updateCountries(this.props.currentRegion);
    
    }

    updateCountries = (currentRegion)=>{
      
      fetch(`https://restcountries.com/v3.1/region/${currentRegion}`)
      .then(res=>res.json())
      .then(data=>{
        const countries =  data.map((value)=> value.name.common)
        
          this.setState({countries})
      })
    }


    render() {     
      
      return (
      <div className={this.props.className + ' container'}>

        {
          this.state.countries.map((value,index)=>{
            return(
              <CountryCard key={index+(Math.random()*1000)} countryName={value} changePage={this.props.changePage} getCountryName={this.props.getCountryName} className={this.props.className}></CountryCard>
            )
          })
        }
        
      </div>
    )
  }
}
