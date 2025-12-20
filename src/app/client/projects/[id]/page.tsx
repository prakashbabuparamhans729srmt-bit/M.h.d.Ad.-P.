import { notFound } from 'next/navigation';
import { projectList } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TimelineSummarizer } from '@/components/projects/timeline-summarizer';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectList.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="grid gap-8">
      <header>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold font-headline">{project.name}</h1>
          <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>{project.status}</Badge>
        </div>
        <p className="text-muted-foreground mt-1">Client: {project.client}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Project Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Progress value={project.progress} className="flex-1" />
            <span className="font-semibold">{project.progress}%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Timeline Summary</CardTitle>
          <CardDescription>
            Get a quick, AI-generated summary of the project timeline below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TimelineSummarizer timeline={project.timeline || 'No timeline available for this project.'} />
        </CardContent>
      </Card>
    </div>
  );
}
