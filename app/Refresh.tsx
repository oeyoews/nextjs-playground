'use client';

import { useRouter } from 'next/navigation';

export default function Refresh() {
  const router = useRouter();
  const handleClick = () => {
    router.refresh();
  };
  return (
    <button className="text-xl font-bold" onClick={handleClick}>
      refresh
    </button>
  );
}
