import React from 'react';
import './App.scss';

import TRIVIA_DATA from './trivia.data'
import Answer from './answer/answer.component'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visibility: null,
      trivia: TRIVIA_DATA,
      answer2: 'Head',
      answer3: 'Arm',
      answer4: 'Foot',
      
    }
    
  }

  

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({visibility: 'visible'}) //After 4 seconds, set render to true
    }.bind(this), 4000)
    
  }
  



  render() {
    
   return (
    <div id="container">
      <section id='top-section'>
      </section>


   <h2 id="question"><p style={{visibility: this.state.visibility}}>{this.state.trivia[0].question}</p></h2>
   
   <div id="answers-container">
   <Answer id='a' correctAnswer={this.state.trivia[0].correct} key={1} myAnswer={this.state.trivia[0].a}/>
   <Answer id='b' correctAnswer={this.state.trivia[0].correct} key={2} myAnswer={this.state.trivia[0].b}/>
   <Answer id='c' correctAnswer={this.state.trivia[0].correct} key={3} myAnswer={this.state.trivia[0].c}/>
   <Answer id='d' correctAnswer={this.state.trivia[0].correct} key={4} myAnswer={this.state.trivia[0].d}/>
    </div>
  
   </div>
  );
}
}
export default App;
