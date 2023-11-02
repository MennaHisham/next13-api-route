'use client';

export default function Home() {
  const makeApiCall = async () => {
    await fetch('/api/hello', {
      method: 'GET',
      body: JSON.stringify({ hello: 'world' }),
    });
  };
  return <button onClick={makeApiCall}>make call</button>;
}
