'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function Button() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const id = params.get('id') || 0;

  const handleClick = () => {
    params.set('id', Math.random().toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <button className="text-xl font-bold" onClick={handleClick}>
      {id}
    </button>
  );
}
