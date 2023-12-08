'use client';

import { useRouter } from 'next/navigation';

export default function Page({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) {
  const router = useRouter();
  const handleClick = () => {
    router.replace('/?id=123');
  };
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click</button>
      searchParams is {JSON.stringify(searchParams, null, 2)}
    </div>
  );
}
