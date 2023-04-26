import React, { useState } from 'react';

export default function Index() {

    const [count, setCount] = useState(0);

    function add() {
        setCount( count + 1)
    }

  return (
    <div>
        <h3>Function Component</h3>
        <p>{count}</p>
        <button onClick={add}>Add 1</button>
    </div>
  )
}
