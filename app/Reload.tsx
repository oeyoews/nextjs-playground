'use client';

export default function Reload() {
  return (
    <button
      className="underline text-xl font-bold"
      onClick={() => location.reload()}>
      click to reload current page
    </button>
  );
}
