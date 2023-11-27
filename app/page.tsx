'use client';

import React, { useEffect, useState } from 'react';
import useUndoStore from './store';
import { v4 as uuid } from 'uuid';

function Counter() {
  const { count, increment, decrement, undo } = useUndoStore();
  const [id, setId] = useState();

  useEffect(() => {
    // @ts-ignore
    setId(uuid());
  }, []);

  return (
    <div>
      {id}
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
}

export default Counter;
