'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, DollarSign, TrendingUp, AlertTriangle, HeartPulse, Activity, Loader2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFirestore, useCollection, useMemoFirebase, useCollectionGroup } from '@/firebase';
import { collection, collectionGroup, query } from 'firebase/firestore';

export default function AdminDashboardPage() {
  const firestore = useFirestore();

  const usersQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'users');
  }, [firestore]);

  const allProjectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collectionGroup(firestore, 'projects'));
  }, [firestore]);

  const { data: userList, isLoading: isLoadingUsers } = useCollection(usersQuery);
  const { data: allProjects, isLoading: isLoadingProjects } = useCollection(allProjectsQuery);
  
  const isLoading = isLoadingUsers || isLoadingProjects;

  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold font-headline">मास्टर एडमिन पैनल</h1>

      <Card>
        <CardHeader>
          <CardTitle>सिस्टम ओवरव्यू</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">सक्रिय यूज़र्स</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <div className="text-2xl font-bold">{userList?.length ?? 0}</div>
              )}
              <p className="text-xs text-muted-foreground">कुल पंजीकृत उपयोगकर्ता</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">एक्टिव प्रोजेक्ट्स</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
               {isLoading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <div className="text-2xl font-bold">{allProjects?.length ?? 0}</div>
              )}
              <p className="text-xs text-muted-foreground">सभी क्लाइंट्स में</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">आज की कमाई</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,87,500</div>
              <p className="text-xs text-muted-foreground">▲ 12.5% कल से</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">मासिक रेवेन्यू</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45.2 लाख</div>
              <p className="text-xs text-muted-foreground">▲ 18% पिछले महीने से</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">पेंडिंग इश्यूज</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 महत्वपूर्ण</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">सिस्टम हेल्थ</CardTitle>
              <HeartPulse className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">सभी सिस्टम ऑनलाइन</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-destructive h-5 w-5" /> क्रिटिकल अलर्ट्स</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
                <li>प्रोजेक्ट #1042 डेडलाइन नज़दीक (2 दिन)</li>
                <li>सर्वर #3 CPU 92%</li>
                <li>3 पेंडिंग सपोर्ट टिकेट्स</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Activity className="text-primary h-5 w-5" /> आज की एक्टिविटी</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="font-semibold text-foreground">09:30</span> - प्रिया ने नई फाइल अपलोड की</li>
                <li><span className="font-semibold text-foreground">10:15</span> - क्लाइंट से पेमेंट प्राप्त</li>
                <li><span className="font-semibold text-foreground">11:00</span> - अमित ने कोड डिप्लॉय किया</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>रीसेंट एक्शंस</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="font-semibold text-foreground">admin</span> ने 2 नए यूज़र्स जोड़े</li>
                <li><span className="font-semibold text-foreground">system</span> ने बैकअप लिया</li>
                <li><span className="font-semibold text-foreground">auto</span> ने इनवॉइस जेनरेट किया</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
          <CardHeader>
            <CardTitle>फाइनेंशियल स्नैपशॉट</CardTitle>
            <CardDescription>मासिक रेवेन्यू ग्रोथ: +18.2% | सबसे ज्यादा रेवेन्यू: प्रीमियम प्लान (36.4%)</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>बेसिक</TableHead>
                        <TableHead>स्टैंडर्ड</TableHead>
                        <TableHead>प्रीमियम</TableHead>
                        <TableHead>एंटरप्राइज</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <div className="font-medium">128 प्रोजेक्ट</div>
                            <div className="text-muted-foreground">₹19.2 लाख</div>
                        </TableCell>
                        <TableCell>
                             <div className="font-medium">45 प्रोजेक्ट</div>
                            <div className="text-muted-foreground">₹27.0 लाख</div>
                        </TableCell>
                        <TableCell>
                             <div className="font-medium">22 प्रोजेक्ट</div>
                            <div className="text-muted-foreground">₹33.0 लाख</div>
                        </TableCell>
                         <TableCell>
                             <div className="font-medium">8 प्रोजेक्ट</div>
                            <div className="text-muted-foreground">₹32.0 लाख</div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}
