'use client';

import { atom, useRecoilState } from 'recoil';

export default function Home() {
  const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="Type here"
      />
      text is {text}
    </div>
  );
}
