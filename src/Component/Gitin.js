//GithubUserInfo.js


import React, { Component } from 'react';
import axios from "axios";


class Gitin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  // async version
  async componentDidMount() {
    const url = `https://api.github.com/user/${this.props.username}`;
    // const url = `https://api.github.com/user/elie`;


    let response = await axios.get(url);
    let user = response.data;
    this.setState({ user });
  }


  // componentDidCatch() {
  //   axios.get("https://api.github.com/user/elie").then((response) => {
  //     let user = response.data;
  //     // console.log(response);
  //     // console.log(user);
  //     this.setState({ user })
  //   });
  // }


  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.bio}</p>
        <img src={this.state.user.avatar_url}></img>
      </div>
    );
  }
}


export default Gitin;
