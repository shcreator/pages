import { NextRequest, NextResponse } from 'next/server';
import marked from 'marked';

export async function POST(req: NextRequest) {
  const { markdown } = await req.json();
  if (!markdown) {
    return NextResponse.json({ error: 'Markdown content is required.' }, { status: 400 });
  }
  const html = marked(markdown);
  return NextResponse.json({ html });
}
