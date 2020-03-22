import React, { Component } from 'react'

import './styles.css';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.clockID = setInterval(() => {this.tick()}, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockID);
    }

    tick(){
        this.setState({date: new Date()});

    }

    render() {
        return (
            <div>
                <h4 id="clock-render">{this.state.date.toLocaleTimeString()}</h4>
            </div>
        )
    }
}
