import React, { Component } from 'react';

class GreetingClass extends Component {
  render() {
    const { name, message } = this.props;
    return (
      <div>
        <h1>{message}, {name}!</h1>
      </div>
    );
  }
}

export default GreetingClass;