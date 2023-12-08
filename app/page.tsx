import Button from './Button';
import Link from 'next/link';
import Refresh from './Refresh';

export default function page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  if (!searchParams?.id) {
    return <div>empty {searchParams?.id}</div>;
  }
  return (
    <div>
      <Button />
      <Refresh />
    </div>
  );
}
