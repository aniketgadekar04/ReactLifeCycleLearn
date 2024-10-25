import React, { Component } from 'react';
import "./ZenQuote.css";
import axios from "axios";


class ZenQuote extends Component {
    constructor(props) {
        console.log("INSIDE CONSTRUCTOR");


        super(props);
        // this.state ={ quote:'' }
        this.state = { quote: props.quote, isLoaded: false }
    }
    // componentDidMount(){
    //     // load data
    //     axios.get("https://api.github.com/zen").then((response)=>{
    //         this.setState({quote:response.data});
    //     });
    //     // set state with their data
    // }


    componentDidMount() {
        console.log("INSIDE COMPONENT DID MOUNT");


        // load data
        axios.get("https://api.github.com/zen").then((response) => {
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true })
                }.bind(this),
                3000
            );
        });
        // set State with their data
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("INSIDE COMPONENT DID UPDATE");
        console.log(prevProps.quote);
        console.log(this.props.quote);
        console.log(prevState.quote);
    }


    // render(){
    //     console.log("INSIDE RENDER");
    //     return(
    //         <div>
    //             <h1>Always remember...</h1>
    //             <p>{this.state.quote}</p>
    //         </div>
    //     );
    // }


    render() {
        console.log("INSIDE RENDER");
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>


                ) : (
                    <div className='loader' />
                    // <div className='spinner'/>


                )}
            </div>
        );
    }
}
export default ZenQuote;
