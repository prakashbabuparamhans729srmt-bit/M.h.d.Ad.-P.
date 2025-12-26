'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, CheckCircle2, Star, Target, ArrowDown, Smile, BrainCircuit, AlertTriangle } from 'lucide-react';
import { RevenueChart } from '@/components/admin/charts/revenue-chart';
import { UserGrowthChart } from '@/components/admin/charts/user-growth-chart';


const performanceMetrics = [
    { title: 'यूज़र ग्रोथ', monthly: '+18.5%', yoy: '+142%', target: '+15%', icon: <Users /> },
    { title: 'प्रोजेक्ट सक्सेस', rate: '89.2%', change: '▲ 3.2%', target: '85%', icon: <CheckCircle2 /> },
    { title: 'क्लाइंट संतुष्टि', score: '4.7/5', change: '▲ 0.4', target: '4.5', icon: <Star /> },
    { title: 'औसत रेवेन्यू/प्रोजेक्ट', value: '₹2,22,655', change: '▲ ₹18,500', target: '₹2,00,000', icon: <TrendingUp /> },
    { title: 'चर्न रेट', value: '2.1%', change: '▼ 0.3%', target: '<3%', icon: <ArrowDown /> },
    { title: 'NPS स्कोर', value: '+68', change: '▲ 5', target: '+50', icon: <Smile /> },
];

const kpiData = [
    { name: 'रेवेन्यू ग्रोथ', value: '18.2%', status: '✅' },
    { name: 'यूज़र एक्विजिशन', value: '+89', status: '✅' },
    { name: 'प्रॉफिट मार्जिन', value: '58.5%', status: '✅' },
    { name: 'प्रोजेक्ट सक्सेस', value: '89.2%', status: '✅' },
    { name: 'औसत डिलिवरी टाइम', value: '6.2wk', status: '⚠️' },
    { name: 'क्लाइंट CSAT', value: '4.7/5', status: '✅' },
    { name: 'चर्न रेट', value: '2.1%', status: '✅' },
    { name: 'रेवेन्यू प्रति यूज़र', value: '₹36,200', status: '✅' },
];

const aiInsights = [
    { text: 'अगले महीने की रेवेन्यू प्रेडिक्शन: ₹48-52 लाख', icon: <TrendingUp className="text-primary" /> },
    { text: 'अपेक्षित नए यूज़र्स (मई): 95-110', icon: <Users className="text-primary" /> },
    { text: 'हाई-वैल्यू प्रोजेक्ट्स की पहचान: ERP और AI सॉल्यूशंस', icon: <BrainCircuit className="text-primary" /> },
    { text: 'रिस्क अलर्ट: 2 प्रोजेक्ट्स में डेडलाइन रिस्क', icon: <AlertTriangle className="text-destructive" /> },
    { text: 'ऑप्टिमाइजेशन सुझाव: स्टाफ को प्रोजेक्ट #1089 पर शिफ्ट करें', icon: <Target className="text-primary" /> },
];


export default function AnalyticsDashboardPage() {
    return (
        <div className="grid gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-headline">एडवांस्ड एनालिटिक्स</h1>
                <Button variant="outline">📅 कस्टम रिपोर्ट</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>परफॉर्मेंस मेट्रिक्स</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-3">
                    {performanceMetrics.map(metric => (
                         <Card key={metric.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                                <div className="text-muted-foreground">{metric.icon}</div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{metric.monthly || metric.rate || metric.score || metric.value}</div>
                                <p className={`text-xs ${metric.change?.includes('▲') ? 'text-green-500' : 'text-red-500'}`}>{metric.change || metric.yoy}</p>
                                <p className="text-xs text-muted-foreground">टारगेट: {metric.target}</p>
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle>ट्रेंड्स एनालिसिस</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-sm mb-2">मासिक रेवेन्यू</h4>
                            <div className="h-48">
                                <RevenueChart />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm mb-2 mt-6">यूज़र ग्रोथ</h4>
                            <div className="h-48">
                                <UserGrowthChart />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>KPI डैशबोर्ड</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {kpiData.map(kpi => (
                                <li key={kpi.name} className="flex justify-between items-center text-sm">
                                    <span>{kpi.name}</span>
                                    <span className="font-semibold">{kpi.value} {kpi.status}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">🎯 KPI सेटिंग्स</Button>
                            <Button variant="secondary" size="sm">📊 बेंचमार्किंग</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BrainCircuit className="h-5 w-5" /> AI इनसाइट्स और प्रेडिक्शन</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-sm">
                        {aiInsights.map((insight, index) => (
                            <li key={index} className="flex items-center gap-3">
                                {insight.icon}
                                <span>{insight.text}</span>
                            </li>
                        ))}
                    </ul>
                     <div className="mt-6 flex gap-2">
                        <Button variant="outline" size="sm">🔮 डिटेल्ड रिपोर्ट</Button>
                        <Button variant="outline" size="sm">📥 डेटा एक्सपोर्ट</Button>
                        <Button variant="secondary" size="sm">📧 शेयर</Button>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
