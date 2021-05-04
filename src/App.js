import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      id: 'question',
      visibility: null
    }
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({visibility: 'visible'}) //After 1 second, set render to true
    }.bind(this), 4000)
  }
  
  render() {
   
    // const timer = () => {
    //   setTimeout(function(){this.setState( {visibility: 'visible'} )}, 3000)
    
    //   }
   return (
    <div id="container">
      <section id='top-section'>
      
      </section>
   <h2 id={this.state.id}><p style={{visibility: this.state.visibility}}>In which part of the body would you find the Patella?</p></h2>
   <div id="answers-container">
    <div id="a" className="answers">Knee</div>
    <div id="b" className="answers">Head</div>
    <div id="c" className="answers">Arm</div>
    <div id="d" className="answers">Foot</div>
   </div>
   </div>
  );
}
}
export default App;
