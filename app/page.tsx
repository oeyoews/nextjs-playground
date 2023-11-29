'use client';

import React, { useEffect, useState } from 'react';
import useBearStore from './store';
import { useShallow } from 'zustand/react/shallow';
import { stat } from 'fs';

const Component1 = () => {
  // const store = useUndoStore();
  const [test, setTest] = useState(0);
  // const [bears, increasePopulation] = useBearStore(
  //   useShallow((state) => [state.bears, state.increasePopulation])
  // );
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const { bears, increasePopulation } = useBearStore();

  useEffect(() => {
    console.log('组件1 渲染了');
  }, []);
  return (
    <>
      <button className="w-full h-24 bg-green-100" onClick={increasePopulation}>
        {/* {bears} */}
        组件1
      </button>
    </>
  );
};

const Component2 = () => {
  const { test } = useBearStore();
  // const test = useBearStore((s) => s.test);

  return (
    <>
      <button className="w-full h-24 bg-green-100">组件2</button>
    </>
  );
};

function Counter() {
  const [inc, setInc] = useState(0);
  useEffect(() => {
    console.log('组件渲染了');
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => setInc(inc + 1)}>parent plugin</button>
      </div>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default Counter;
