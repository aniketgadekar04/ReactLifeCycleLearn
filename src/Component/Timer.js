import React, { Component } from 'react';


class Timer extends Component {
    constructor(props){
    super(props);
    this.state={time : new Date()}


    console.log("IN CONSTRUCTOR");
    }
    componentDidMount(){
        console.log("COMPONENT DID MOUNT");


        this.timerID = setInterval(()=>{
            this.setState({time:new Date()})
        },1000)
    }


  render() {
    console.log("IN RENDER");
    // return <h1>Timer</h1>


    return<h1>{this.state.time.getSeconds()}</h1>
  }
}
export default Timer
