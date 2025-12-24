'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MoreHorizontal, PlusCircle, Search, FileDown, CalendarClock, Loader2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, collectionGroup, query } from 'firebase/firestore';

export default function AdminProjectsPage() {
  const projectStatuses = ['Planning', 'Design', 'Development', 'Testing', 'Completed', 'On Hold'];
  const firestore = useFirestore();

  const allProjectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collectionGroup(firestore, 'projects'));
  }, [firestore]);

  const { data: allProjects, isLoading: isLoadingProjects } = useCollection(allProjectsQuery);
  
  const upcomingDeadlines = [
    { id: '1089', task: 'Design Finalization', team: 'Priya', date: 'April 22' },
    { id: '1042', task: 'Module 2 Delivery', team: 'Rahul', date: 'April 25' },
    { id: '1067', task: 'Project Plan Approval', team: 'Priya', date: 'April 28' },
  ];

  const getStatusVariant = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'default';
      case 'in progress': return 'secondary';
      case 'on hold': return 'destructive';
      case 'planning': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">प्रोजेक्ट्स मैनेजमेंट</h1>
          <p className="text-muted-foreground">Monitor and manage all client projects from one place.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add new project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>सभी प्रोजेक्ट्स</CardTitle>
               <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="प्रोजेक्ट ID, नाम, या क्लाइंट से खोजें..." className="pl-10 w-full" />
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-sm font-medium shrink-0">फ़िल्टर:</span>
                  {projectStatuses.map((status) => (
                     <div key={status} className="flex items-center space-x-2">
                       <Checkbox id={`filter-${status.toLowerCase().replace(' ', '-')}`} />
                       <Label htmlFor={`filter-${status.toLowerCase().replace(' ', '-')}`} className="text-sm font-normal">{status}</Label>
                     </div>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
               {isLoadingProjects ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
              ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Client ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allProjects?.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{project.clientId}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(project.status)}>
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={project.progress} className="w-[100px]" />
                          <span>{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{new Date(project.endDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">प्रोजेक्ट स्टैटिस्टिक्स</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
                <div className="flex justify-between"><span>कंप्लीट:</span> <span className="font-semibold">128 (63%)</span></div>
                <div className="flex justify-between"><span>एक्टिव:</span> <span className="font-semibold">{allProjects?.length ?? 0}</span></div>
                <div className="flex justify-between"><span>होल्ड:</span> <span className="font-semibold">15 (7%)</span></div>
                <div className="flex justify-between"><span>प्लानिंग:</span> <span className="font-semibold">15 (7%)</span></div>
                <Separator className="my-2" />
                <div className="flex justify-between"><span>औसत समय:</span> <span className="font-semibold">6.2 सप्ताह</span></div>
                <div className="flex justify-between"><span>सक्सेस रेट:</span> <span className="font-semibold">89%</span></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">बल्क एक्शंस</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2">
              <Button variant="outline" size="sm">📅 डेडलाइन अपडेट</Button>
              <Button variant="outline" size="sm">👥 टीम असाइनमेंट</Button>
              <Button variant="outline" size="sm">💰 बजट मॉडिफिकेशन</Button>
              <Button variant="outline" size="sm">📧 क्लाइंट अपडेट</Button>
              <Button variant="outline" size="sm">📊 रिपोर्ट जनरेट</Button>
              <Separator className="my-2" />
              <Button variant="secondary" size="sm"><FileDown className="mr-2 h-4 w-4"/> CSV एक्सपोर्ट</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><CalendarClock className="w-5 h-5" /> अपकमिंग डेडलाइन्स (अगले 7 दिन)</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2 text-sm">
                {upcomingDeadlines.map(deadline => (
                    <li key={deadline.id} className="flex justify-between items-center">
                        <span><Badge variant="secondary">#{deadline.id}</Badge> - {deadline.task} ({deadline.team})</span>
                        <span className="font-medium">{deadline.date}</span>
                    </li>
                ))}
                <li className="flex justify-between items-center text-primary font-semibold">
                    <span>5 क्लाइंट पेमेंट ड्यू</span>
                    <span>April 30</span>
                </li>
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
