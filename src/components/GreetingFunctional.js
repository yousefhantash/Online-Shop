import React from 'react';

function GreetingFunctional({ name, message }) {
  return (
    <div>
      <h1>{message}, {name}!</h1>
    </div>
  );
}

export default GreetingFunctional;
