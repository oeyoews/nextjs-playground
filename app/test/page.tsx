import Link from 'next/link';

export default function page() {
  return (
    <div>
      <Link href="/?id=1" className="font-bold text-xl">
        to /?=1
      </Link>
    </div>
  );
}
