import Image from 'next/image';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/public-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, news, and updates from the VyaparSphere team.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const image = PlaceHolderImages.find((img) => img.id === post.imageId);
            return (
              <Card key={post.slug} className="flex flex-col overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  {image && (
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-xl leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </PublicLayout>
  );
}
