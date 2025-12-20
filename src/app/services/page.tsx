import { PublicLayout } from '@/components/layout/public-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, BrainCircuit, ShieldCheck, Megaphone, Palette } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: 'Web Application Development',
    description: 'We build robust, scalable, and secure web applications tailored to your business needs using modern technologies like Next.js and React.',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'From iOS to Android, we create beautiful and performant mobile applications that provide a seamless user experience for your customers on the go.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: 'AI & Machine Learning Solutions',
    description: 'Leverage the power of AI to automate processes, gain insights from your data, and create intelligent products with our custom ML models.',
  },
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Our design team crafts intuitive and engaging user interfaces that not only look great but are also easy to use, enhancing customer satisfaction.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: 'Client & Admin Portals',
    description: 'We develop secure, custom portals for clients and administrators, streamlining communication, project management, and data access.',
  },
  {
    icon: <Megaphone className="w-10 h-10 text-primary" />,
    title: 'Digital Marketing & SEO',
    description: 'Grow your online presence with our data-driven digital marketing and SEO strategies designed to increase traffic and conversions.',
  },
];

export default function ServicesPage() {
  return (
    <PublicLayout>
      <div className="container py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of digital solutions to empower your business and drive growth in the modern landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
