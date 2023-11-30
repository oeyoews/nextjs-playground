// 'use client';

import { useId } from 'react';

export default function Home() {
  const id = useId();
  return (
    <div>
      <div>demo</div>
      {id}
      <span>{id}</span>
    </div>
  );
}
