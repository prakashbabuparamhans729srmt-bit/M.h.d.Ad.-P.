import { Globe, ShieldCheck, Cpu, LayoutTemplate, Newspaper, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Multilingual Websites',
    description: 'Reach a broader audience with websites beautifully crafted in both Hindi and English.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Secure Client Portal',
    description: 'Manage projects, share files, and communicate seamlessly through a secure, dedicated portal.',
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: 'AI Timeline Summarization',
    description: 'Turn complex project timelines into concise, easy-to-understand updates for your clients.',
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: 'Admin Panel',
    description: 'Oversee users, projects, and system settings with a powerful and intuitive admin dashboard.',
  },
  {
    icon: <Newspaper className="w-8 h-8 text-primary" />,
    title: 'Content Management',
    description: 'Keep your audience engaged with a dynamic blog and news section you can easily manage.',
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Promotional Landing Pages',
    description: 'Launch targeted campaigns with high-converting landing pages for your special offers.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="max-w-xl text-center mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Core Features</h2>
          <p className="mt-4 text-muted-foreground">
            A comprehensive suite of tools designed to grow and manage your business effectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center items-center justify-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="bg-primary/10 rounded-full p-4 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
