import Image from 'next/image';
import { PublicLayout } from '@/components/layout/public-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Globe, Target, Eye } from 'lucide-react';

const teamMembers = [
  {
    name: 'Aarav Sharma',
    role: 'Founder & CEO',
    imageId: 'avatar-2',
  },
  {
    name: 'Sneha Reddy',
    role: 'Chief Technology Officer',
    imageId: 'avatar-1',
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Client Relations',
    imageId: 'avatar-3',
  },
];

export default function AboutUsPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'blog-post-3');

  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About VyaparSphere</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of innovators dedicated to empowering businesses by bridging technology gaps and fostering global growth.
          </p>
        </div>

        {heroImage && (
          <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden mb-20 shadow-lg">
            <Image
              src={heroImage.imageUrl}
              alt="Our Team"
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
          <Card>
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide businesses with scalable, multilingual, and AI-powered digital solutions that streamline operations and expand their global reach.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading digital transformation partner for enterprises, enabling them to thrive in a connected and competitive world.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Innovation, Collaboration, Integrity, and an unwavering commitment to our clients' success. We build partnerships, not just projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Team</h2>
          <p className="mt-3 text-muted-foreground">The minds behind the mission.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
            return (
              <Card key={member.name} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary/20">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </PublicLayout>
  );
}
