'use client';

export default function Home() {
  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
  };

  return (
    <div>
      <input type="text" onKeyDown={handlePress} />
    </div>
  );
}
