'use client';

import React, { useEffect } from 'react';
import useUndoStore from './store';

function Counter() {
  const { count, data, getData, increment, decrement, undo } = useUndoStore();
  const d = useUndoStore((state) => state.count);

  const Component1 = () => {
    useEffect(() => {
      console.log('component 1');
    }, []);
    return (
      <p>
        Count: {d}
        {JSON.stringify(data)}
      </p>
    );
  };

  return (
    <div>
      <button onClick={getData}>getdata</button>
      userId: {data.userId}
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={undo}>Undo</button>
      <Component1 />
    </div>
  );
}

export default Counter;
