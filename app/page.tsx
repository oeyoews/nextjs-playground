import Button from './Button';
import Link from 'next/link';

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
      <Link href="/?id=1"></Link>
    </div>
  );
}
