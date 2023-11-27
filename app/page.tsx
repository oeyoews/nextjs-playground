'use client';

import { atom, useAtom } from 'jotai';

// Create your atoms and derivatives
const App = () => {
  const inputAtom = atom('');
  const Input = () => {
    const [value, setValue] = useAtom(inputAtom);
    return (
      <>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        {value}
      </>
    );
  };
  return (
    <>
      <Input />
    </>
  );
};

export default App;
