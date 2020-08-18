import React from 'react';
import './App.css';
import About from "../About/About";
import Title from "../Title/Title";
import Work from '../Work/Work';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';

class App extends React.Component 
{
  render() {
    return (
      <div className="App">
        <div id="content">
          
          <Title/>
          <About/>
          <Work/>
          <Project/>
          <Footer/>
        
          </div>
      </div>
    );
  }

}


export default App;
