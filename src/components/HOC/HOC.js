import React, { useState } from 'react'

const HOC = (Component, data) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(data);

    const handleChange = () => {
      setCount(count + 1);
    };

    return <Component count={count} handleChange={handleChange} {...props} />;
  };
}

export default HOC