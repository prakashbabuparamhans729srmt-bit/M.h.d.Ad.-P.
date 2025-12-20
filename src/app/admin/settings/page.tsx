
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Lock,
  Bell,
  Globe,
  Database,
  Wrench,
  HeartPulse,
  Key,
  BellRing,
  Palette,
  Eye,
  Save,
  Trash2,
  RefreshCw,
  ShieldCheck,
  FileText,
  GitBranch,
  Rocket,
  ClipboardList
} from 'lucide-react';

const healthData = [
  { server: 'Production', cpu: 68, memory: 72, storage: 64 },
  { server: 'Staging', cpu: 42, memory: 58, storage: 45 },
  { server: 'Backup', cpu: 15, memory: 28, storage: 82 },
];

const ProgressBar = ({ value }: { value: number }) => (
    <div className="w-full bg-muted rounded-full h-2.5">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
);

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-headline">सिस्टम कॉन्फिगरेशन</h1>
        <Button>
          <Save className="mr-2" /> सेव करें
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Lock /> सेक्योरिटी</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="space-y-2">
                <Label>2FA रिक्वायर</Label>
                <div className="flex items-center space-x-2">
                    <Checkbox id="2fa-staff" defaultChecked />
                    <Label htmlFor="2fa-staff" className="font-normal">स्टाफ</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <Checkbox id="2fa-client" />
                    <Label htmlFor="2fa-client" className="font-normal">क्लाइंट्स</Label>
                </div>
            </div>
            <div>
                <Label htmlFor="login-attempts">लॉगिन अटेम्प्ट लिमिट</Label>
                <Input id="login-attempts" defaultValue="5" />
            </div>
            <div>
                <Label htmlFor="auto-logout">ऑटो लॉगआउट (मिनट)</Label>
                <Input id="auto-logout" defaultValue="30" />
            </div>
             <div className="flex items-center space-x-2">
                <Checkbox id="ip-whitelist" />
                <Label htmlFor="ip-whitelist" className="font-normal">IP व्हाइटलिस्ट एनेबल</Label>
            </div>
             <Button variant="outline" size="sm" className="w-full mt-4"><Key className="mr-2"/> API Keys</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell /> नोटिफिकेशन</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="cursor-pointer hover:text-primary">ईमेल टेम्प्लेट</p>
            <p className="cursor-pointer hover:text-primary">SMS इंटीग्रेशन</p>
            <p className="cursor-pointer hover:text-primary">पुश नोटिफिकेशन</p>
            <p className="cursor-pointer hover:text-primary">ऑटो रिमाइंडर</p>
            <p className="cursor-pointer hover:text-primary">कस्टम अलर्ट्स</p>
            <p className="cursor-pointer hover:text-primary">शेड्यूल्ड नोटिफिकेशन</p>
            <p className="cursor-pointer hover:text-primary">वेबहुक्स</p>
            <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1"><BellRing className="mr-2"/> चैनल सेटअप</Button>
                <Button variant="secondary" size="sm" className="flex-1">📧 टेस्ट भेजें</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Globe /> साइट सेटिंग्स</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="cursor-pointer hover:text-primary">साइट टाइटल</p>
            <p className="cursor-pointer hover:text-primary">लोगो अपलोड</p>
            <p className="cursor-pointer hover:text-primary">फेविकॉन</p>
            <p className="cursor-pointer hover:text-primary">मेन्यू मैनेजमेंट</p>
            <p className="cursor-pointer hover:text-primary">पेज लेआउट</p>
            <p className="cursor-pointer hover:text-primary">SEO सेटिंग्स</p>
            <p className="cursor-pointer hover:text-primary">सोशल मीडिया लिंक्स</p>
            <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1"><Palette className="mr-2"/> थीम एडिटर</Button>
                <Button variant="secondary" size="sm" className="flex-1"><Eye className="mr-2"/> प्रीव्यू</Button>
            </div>
          </CardContent>
        </Card>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Database /> डेटाबेस</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
                <Label>बैकअप शेड्यूल</Label>
                <p className="text-muted-foreground">दैनिक 2:00 AM</p>
            </div>
            <div>
                <Label>लॉग रिटेंशन</Label>
                <p className="text-muted-foreground">90 दिन</p>
            </div>
            <div>
                <Label>स्टोरेज यूसेज</Label>
                <p className="text-muted-foreground">145 GB / 500 GB</p>
                <ProgressBar value={(145/500)*100} />
            </div>
             <div>
                <Label>कनेक्शन पूल</Label>
                <p className="text-muted-foreground">50 / 100</p>
                 <ProgressBar value={50} />
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4"><Save className="mr-2"/> बैकअप अभी</Button>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Wrench /> सिस्टम टूल्स</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
             <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><Trash2 size={16} /> कैश क्लियर</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><RefreshCw size={16} /> डेटा सिंक</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><HeartPulse size={16} /> परफॉर्मेंस मॉनिटर</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><FileText size={16} /> एरर लॉग्स</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><ShieldCheck size={16} /> सिक्योरिटी स्कैन</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><ClipboardList size={16} /> ऑडिट ट्रेल</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><Trash2 size={16} /> डेटा क्लीनअप</li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary"><Rocket size={16} /> हेल्थ चेक</li>
             </ul>
            <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1"><Rocket className="mr-2"/> सिस्टम डायग्नोस्टिक</Button>
                <Button variant="secondary" size="sm" className="flex-1"><FileText className="mr-2"/> सिस्टम लॉग</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><HeartPulse /> सिस्टम हेल्थ और मॉनिटरिंग</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>सर्वर</TableHead>
                        <TableHead>CPU</TableHead>
                        <TableHead>मेमोरी</TableHead>
                        <TableHead>स्टोरेज</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {healthData.map(data => (
                        <TableRow key={data.server}>
                            <TableCell className="font-medium">{data.server}</TableCell>
                            <TableCell><ProgressBar value={data.cpu} /> {data.cpu}%</TableCell>
                            <TableCell><ProgressBar value={data.memory} /> {data.memory}%</TableCell>
                            <TableCell><ProgressBar value={data.storage} /> {data.storage}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Separator className="my-4" />
            <div className="text-sm text-muted-foreground space-y-1">
                <p className="text-green-500 font-semibold">✅ सभी सर्विसेज अप और रनिंग</p>
                <p>⏱️ **अपटाइम:** 99.8% | **लेटेंसी:** 142ms</p>
                <p>🔄 **लास्ट बैकअप:** 20/04/24 02:00 AM</p>
            </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline">🔄 सिस्टम अपडेट</Button>
        <Button variant="outline">🛡️ फायरवॉल कॉन्फिग</Button>
        <Button variant="outline">📊 रियल-टाइम मॉनिटरिंग</Button>
      </div>
    </div>
  );
}
