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
      questionNumber: 0
    }
    this.handler = this.handler.bind(this)
  }

  

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({visibility: 'visible'}) //After 4 seconds, set render to true
    }.bind(this), 4000)
    
  }
  
  handler(number) {
    setTimeout(() => {
      this.setState({
        questionNumber: this.state.questionNumber + number})
    }, 8000)
  }



  render() {
    
   return (
    <div id="container">
      <section id='top-section'>
      </section>


   <h2 id="question"><p style={{visibility: this.state.visibility}}>{this.state.trivia[this.state.questionNumber].question}</p></h2>
   
   <div id="answers-container">
   <Answer id='a' handler={this.handler} correctAnswer={this.state.trivia[this.state.questionNumber].correct} questionNumber={this.state.questionNumber} key={1} myAnswer={this.state.trivia[this.state.questionNumber].a}/>
   <Answer id='b' handler={this.handler} correctAnswer={this.state.trivia[this.state.questionNumber].correct} questionNumber={this.state.questionNumber} key={2} myAnswer={this.state.trivia[this.state.questionNumber].b}/>
   <Answer id='c' handler={this.handler} correctAnswer={this.state.trivia[this.state.questionNumber].correct} questionNumber={this.state.questionNumber} key={3} myAnswer={this.state.trivia[this.state.questionNumber].c}/>
   <Answer id='d' handler={this.handler} correctAnswer={this.state.trivia[this.state.questionNumber].correct} questionNumber={this.state.questionNumber} key={4} myAnswer={this.state.trivia[this.state.questionNumber].d}/>
    </div>
  
   </div>
  );
}
}
export default App;
