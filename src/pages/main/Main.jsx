import React, { Component } from 'react';
import Form from './form/Form';
import Container from './content/Container';
import Result from '../result/Result';
import './main.css'


class Main extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         renderResult:false,
         resultData:'',
         currentRegion:'Asia'
        }
    }

    getCountryName = (value)=>{
        
        this.setState({resultData:value});
    }
    
    changePage= ()=>{
        this.setState({renderResult : !this.state.renderResult});
    }

    getCurrentRegion = (value) =>{
            this.setState({currentRegion: value});
    }

    render() {
            
            
            let element;
            
            if(!this.state.renderResult){
                element = <>
                        <Form className={this.props.className} getCountryName = {this.getCountryName} changePage={this.changePage} getCurrentRegion={this.getCurrentRegion}></Form> 
                <Container className={this.props.className} changePage={this.changePage} getCountryName={this.getCountryName}  currentRegion ={this.state.currentRegion} ></Container> 
                </>
            }else{
                 element = <Result className={this.props.className} name={ this.state.resultData || 'india'} getCountryName={this.getCountryName} changePage={this.changePage}></Result>
            }
        
            return (

            <div className='main'>
                    {element}
            </div>
        );
    }
}

export default Main;

