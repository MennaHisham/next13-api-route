import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  // redirect('http://localhost:3000');
}

export async function POST(req: Request) {
  const body = await req.json();
  // req.cookies.get('cookies');
  req.headers.get('Authorization');
  console.log(body);
  return new Response(JSON.stringify({ hello: 'worlds', whatsup: 'world' }));
}
