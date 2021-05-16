import React from 'react'
import './answer.styles.scss'

class Answer extends React.Component {
        constructor(props) {
        super(props)

            this.state = {
            backgroundColor: null,
            updateAnswer: this.props.questionNumber 
    }
    this.handleClick = this.handleClick.bind(this)
    // this.calculateAnswer = this.calculateAnswer.bind(this)
    this.colorChange = this.colorChange.bind(this)
    }
   
   

    colorChange() {
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 1000);
        
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 4200);
        setTimeout(() => {
            this.setState({backgroundColor: 'orange'})
        }, 4400);
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 4600);
        setTimeout(() => {
            this.setState({backgroundColor: 'orange'})
        }, 4800);
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 5000);
        setTimeout(() => {
            this.setState({backgroundColor: 'orange'})
        }, 5200);
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 5400);
        setTimeout(() => {
            this.setState({backgroundColor: 'orange'})
        }, 5600);
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 5800);
        setTimeout(() => {
            this.setState({backgroundColor: 'orange'})
        }, 6000);
        setTimeout(() => {
            this.setState({backgroundColor: 'green'})
        }, 6200);
        setTimeout(() => {
            this.setState({backgroundColor: 'orange'})
        }, 6400);
        setTimeout(() => {
            this.setState({backgroundColor: '#4726bb'})
        }, 8000);
    }

    handleClick(e) {
        // this.calculateAnswer()
            if(this.props.id === this.props.correctAnswer){
                this.colorChange()
                this.props.handler(+1)
            }else {
                this.setState({backgroundColor: 'red'})
            }
        }
    render() {
    
    return (
    <div id={this.props.id} onClick={this.handleClick} style={{backgroundColor: this.state.backgroundColor}} className="answers blink">{this.props.myAnswer}</div>
    )
    }
}

export default Answer
