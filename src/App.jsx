import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './pages/main/Main';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
          darkTheme:true     
    }
  }

  changeTheme = ()=>{
    if(this.state.darkTheme){
      
      document.querySelector('html').style.background = "rgb(186, 248, 255)";
    }
    else{
      document.querySelector('html').style.background = "hsl(207, 26%, 17%)";
    }
    this.setState({darkTheme: !this.state.darkTheme});
    
  }

  render() {
    let  theme = 'dark-theme';
    if(!this.state.darkTheme){
      theme = 'light-theme';  
    }
    return (
      <>
            <Header className={theme} changeTheme = {this.changeTheme}></Header>
            <Main className={theme} ></Main>
      </>
    );
  }
}

export default App;
