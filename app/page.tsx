'use client';

import React, { useEffect, useState } from 'react';
import useBearStore from './store';
import { useShallow } from 'zustand/react/shallow';

const Component1 = () => {
  // const store = useUndoStore();
  const [test, setTest] = useState(0);
  const [bears, increasePopulation] = useBearStore(
    useShallow((state) => [state.bears, state.increasePopulation])
  );
  useEffect(() => {
    console.log('组件1 渲染了');
  }, []);
  return (
    <>
      <button onClick={() => setTest(Math.random())}>state</button>
      {test}
      <button className="w-full h-24 bg-green-100" onClick={increasePopulation}>
        {bears}
        increment c1
      </button>
    </>
  );
};

const Component2 = () => {
  useEffect(() => {
    console.log('组件2 渲染了');
  }, []);
  return <p></p>;
};

function Counter() {
  const [inc, setInc] = useState(0);
  useEffect(() => {
    console.log('组件渲染了');
  }, []);
  return (
    <div>
      <button onClick={() => setInc(inc + 1)}>{inc}</button>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default Counter;
