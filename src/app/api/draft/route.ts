import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { getArticle } from '../../_hooks';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== process.env.HYGRAPH_PREVIEW_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 });
  }

  const article = await getArticle(slug, true);
  if (!article) {
    return new Response('Invalid slug', { status: 401 });
  }

  draftMode().enable();

  redirect(`/article/${slug}`);
}
