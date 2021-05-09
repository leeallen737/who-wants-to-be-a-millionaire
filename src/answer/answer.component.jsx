import React from 'react'
import './answer.styles.scss'

class Answer extends React.Component {
        constructor(props) {
        super(props)

            this.state = {
            backgroundColor: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.calculateAnswer = this.calculateAnswer.bind(this)
    }
   
    calculateAnswer() {
        if(this.props.id === this.props.correctAnswer) {
            this.setState({ correctAnswer: true })
        }
    }

    handleClick(e) {
        // this.calculateAnswer()
            if(this.props.id === this.props.correctAnswer){
                this.setState({backgroundColor: 'green'})
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
