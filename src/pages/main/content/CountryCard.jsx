import React, { Component } from 'react'

export default class  extends Component {
    constructor(props){
        super(props);
        this.state={
              name: this.props.countryName,
              capital:'null',
              region: 'null',
              population:'null',
              flags: 'null'

            }
        
        
    }
    
    componentDidMount(){
      fetch(`https://restcountries.com/v3.1/name/${this.state.name}`)
      .then(res=> res.json())
      .then(data=> {
        
        let capital;
        if(data[0].capital === undefined){
          capital = 'no data';  
        }
        else{
          capital = data[0].capital[0];
        }
          this.setState({
        name: data[0].name.common,
        capital: capital,
        region: data[0].region,
        population: data[0].population,
        flags: data[0].flags
      })}).catch(err=>console.log(err));



    }

    handleClick = ()=>{
      this.props.getCountryName(this.state.name);
      this.props.changePage();
   }

  
    render() {
          
        return (
      <div className={ this.props.className + ' countryCard'} onClick={this.handleClick}>
        <span className = 'flagHolder' >
        <img src={this.state.flags.png} alt="flag"/>
        </span>
        <h1>{this.state.name}</h1>
        <span className='dt'>
        <p>Population:</p>
        <p>{this.state.population}</p>
        </span>
        <span className='dt'>
        <p>Region:</p>
        <p>{this.state.region}</p>
        </span>
        <span className='dt'>
        <p>Capital:</p>
        <p>{this.state.capital}</p>
        </span>
      </div>
    )
  }
}
