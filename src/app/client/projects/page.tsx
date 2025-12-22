
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projectList } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ClientProjectsPage() {
  // For demonstration, we'll filter projects for a specific client.
  // In a real app, this would be based on the logged-in user's ID.
  const clientName = 'Priya Patel';
  const clientProjects = projectList.filter((p) => p.client === clientName);

  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">My Projects</h1>
        <p className="text-muted-foreground">Here is a list of all your active and past projects.</p>
      </header>

      {clientProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {clientProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline">{project.name}</CardTitle>
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>Project ID: {project.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="font-medium">Progress</span>
                    <span className="text-muted-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/client/projects/${project.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-10 text-center">
            <p className="text-muted-foreground">You do not have any projects assigned yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
