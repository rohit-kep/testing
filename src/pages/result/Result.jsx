import React, {PureComponent} from 'react'
import './result.css'
import {AiOutlineArrowLeft}  from 'react-icons/ai'



export default class Result extends PureComponent {
  
    
    constructor(props){
        super(props);

        this.state= {
            name:this.props.name,
            nativeName:'',
            population:'',
            region:'',
            subRegion:'',
            capital:'',
            topLevelDomain:'',
            currencies:'',
            languages:[],
            borderCountries:[],
            flag:''
        }

        
    }
    

  componentDidMount(){
    this.getData(this.props.name);
  }

  getData(value){
    let url =   `https://restcountries.com/v3.1/name/${value}`;
    
    if(String(value).trim().length ===3){
        url = `https://restcountries.com/v3.1/alpha/${value}`;
    }
fetch(url)
.then(res=>res.json())
.then(data=>{
    this.setState({
        name: data[0].name.common,
    nativeName: data[0].name.nativeName[(Object.keys(data[0].name.nativeName)[0])].official,
    population: data[0].population,
    region:data[0].region,
    subRegion:data[0].subregion,
    capital:data[0].capital[0],
    topLevelDomain:data[0].tld[0],
    currencies:data[0].currencies[(Object.keys(data[0].currencies)[0])].name,
    languages:Object.keys(data[0].languages),
    borderCountries:data[0].borders,
    flag:data[0].flags    
    });

})
.catch(err=>console.log(err))
  }



  handleClick=(e)=>{
        this.props.getCountryName(e.target.textContent);    
        this.getData(e.target.textContent)
  }

  
  render(){
        
    return (
    <div className={this.props.className +" result"}>
        <button onClick={this.props.changePage} className= {this.props.className + ' prev'} ><AiOutlineArrowLeft/> Back</button>
        <div className='result-container'>
            <span className='result-flag'>
                <img src={this.state.flag.svg} alt="" />
            </span>
            <div className='main-container'>
                <h1>{this.state.name}</h1>
                <div className='container2'>
                <div className='container3'>
                    <span>
                    <p>Native Name:</p>
                    <p>{this.state.nativeName}</p>
                    </span>
                    <span>
                    <p>Population:</p>
                    <p>{this.state.population}</p>
                    </span>
                    <span>
                    <p>Region:</p>
                    <p>{this.state.region}</p>
                    </span>
                    <span>
                    <p>Sub Region:</p>
                    <p>{this.state.subRegion}</p>
                    </span>
                    <span>
                    <p>Capital:</p>
                    <p>{this.state.capital}</p>
                    </span>
                </div>
                <div className='container4'>
                    <span>
                    <p>Top Level Domain:</p>
                    <p>{this.state.topLevelDomain}</p>
                    </span>
                    <span>
                    <p>Currencies:</p>
                    <p>{this.state.currencies}</p>
                    </span>
                    <span>
                    <p>Languages:</p>
                    <p>{this.state.languages.join(', ')}</p>
                    </span>
                </div>
                </div>
                <div className='container5'>
                    <p>Border Countries:</p>
                    {
                        this.state.borderCountries.map((value,index)=>{
                            return(
                                <button className={this.props.className} key={index} onClick={this.handleClick}>{value} </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
}
