import React, { Component } from 'react';

import { connect } from 'react-redux';
import { increment, decrement } from './Actions/index';

class Apptest extends Component {
  componentDidMount() {
    this.props.increment(this.props.count);
  }
  render() {
    return (
      <h1>
        The current count is {this.props.count}
        <button onClick={() => this.props.increment(1)}>+</button>
        <button onClick={() => this.props.decrement(1)}>-</button>
      </h1>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});
export default connect(mapStateToProps, { increment, decrement })(Apptest);
