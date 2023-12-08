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
  return <div>{searchParams?.id}</div>;
}
