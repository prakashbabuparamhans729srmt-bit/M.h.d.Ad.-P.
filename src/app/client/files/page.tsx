
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { projectFiles } from '@/lib/placeholder-data';
import { Download, File, Folder, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function ClientFilesPage() {
  // In a real app, this would be filtered by the logged-in client's projects
  const clientFiles = projectFiles;

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="text-red-500" />;
      case 'figma':
        return <Palette className="text-purple-500" />;
      case 'word':
        return <FileText className="text-blue-500" />;
      case 'zip':
        return <FileArchive className="text-yellow-500" />;
      case 'png':
        return <ImageIcon className="text-green-500" />;
      default:
        return <File className="text-muted-foreground" />;
    }
  };

  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">Project Files</h1>
        <p className="text-muted-foreground">Access all documents and assets related to your projects.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>All Files</CardTitle>
          <div className="mt-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search files by name or project..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Project ID</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientFiles.map((file) => (
                <TableRow key={file.id}>
                  <TableCell className="font-medium">{file.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{file.type}</Badge>
                  </TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{file.projectId}</Badge>
                  </TableCell>
                  <TableCell>{file.uploaded}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download File</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// Dummy components for icons that might not be in lucide-react
const FileText = (props: any) => <File {...props} />;
const Palette = (props: any) => <File {...props} />;
const FileArchive = (props: any) => <File {...props} />;
const ImageIcon = (props: any) => <File {...props} />;
