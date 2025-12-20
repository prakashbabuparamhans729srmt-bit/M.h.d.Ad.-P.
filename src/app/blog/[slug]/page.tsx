import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PublicLayout } from '@/components/layout/public-layout';
import { blogPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);
  const authorAvatar = PlaceHolderImages.find((img) => img.id === 'avatar-1');

  return (
    <PublicLayout>
      <div className="container max-w-4xl mx-auto py-12 md:py-20">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  {authorAvatar && <AvatarImage src={authorAvatar.imageUrl} alt={post.author} data-ai-hint={authorAvatar.imageHint} />}
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </header>

          {image && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={image.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                priority
              />
            </div>
          )}

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </PublicLayout>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
