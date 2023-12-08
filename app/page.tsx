import Reload from './Reload';

export default function page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  // if (!searchParams?.id) {
  //   return <div>empty {searchParams?.id}</div>;
  // }
  return (
    <div className="space-x-2 min-h-screen">
      <Reload />
      <hr />
      <div>searchParams: {JSON.stringify(searchParams, null, 2)}</div>
    </div>
  );
}
