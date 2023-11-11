import { ENV_KEY, getEnv } from '@/utils/env';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const backendUrl =
    getEnv(ENV_KEY.BACKEND_URL) ||
    'http://localhost:8080/api/v1/herb-classifier/service';

  const reqBody = await request.formData();

  try {
    const response = await fetch(`${backendUrl}/classify`, {
      method: 'post',
      body: reqBody,
    });

    return new Response(await response.text(), { status: 200 });
  } catch (error) {
    console.error('Error uploading image:', error);
    return new Response('error occurred', { status: 400 });
  }
}
