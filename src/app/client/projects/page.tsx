'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { AddProjectDialog } from '@/components/projects/add-project-dialog';

export default function ClientProjectsPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const projectsQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return collection(firestore, 'users', user.uid, 'projects');
  }, [firestore, user]);

  const { data: clientProjects, isLoading: isLoadingProjects } = useCollection(projectsQuery);

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'default';
      case 'in progress':
        return 'secondary';
      case 'on hold':
        return 'outline';
      case 'planning':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const isLoading = isUserLoading || isLoadingProjects;

  return (
    <div className="grid gap-6">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">My Projects</h1>
          <p className="text-muted-foreground">Here is a list of all your active and past projects.</p>
        </div>
        {user && <AddProjectDialog userId={user.uid} />}
      </header>

      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {!isLoading && clientProjects && clientProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {clientProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline">{project.name}</CardTitle>
                  <Badge variant={getStatusVariant(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>Project ID: {project.id.substring(0, 7)}</CardDescription>
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
        !isLoading && (
          <Card>
            <CardContent className="p-10 text-center">
              <p className="text-muted-foreground">You do not have any projects assigned yet.</p>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
}
