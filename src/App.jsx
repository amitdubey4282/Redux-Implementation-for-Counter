import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Apptest from './Apptest';

class App extends Component {
  componentDidMount() {
    /* fetch API request to get all the post displayed of a particular category */

    fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty', {
      method: 'GET',
      headers: { Authorization: 'whatever-you-want' },
      'Content-Type': 'application/json',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ postOfSpecificCategory: data });
        console.log(data);
      });
  }
  render() {
    console.log(this.props.count);
    return (
      <div>
        <Apptest />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  count: state.count,
});
export default connect(mapStateToProps)(App);
