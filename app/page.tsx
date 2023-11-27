'use client';

import React from 'react';
import useUndoStore from './store';

function Counter() {
  const { count, increment, decrement, undo } = useUndoStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
}

export default Counter;
