
'use client';

import { 
  Bell, 
  Bot, 
  MessageSquare, 
  Target, 
  DollarSign, 
  Archive, 
  Users, 
  TrendingUp, 
  Smartphone,
  Banknote,
  Package,
  BarChart as BarChartIcon,
  Trophy,
  Star,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis,
  ResponsiveContainer 
} from "recharts";

const chartData = [
  { time: "सुबह", sales: 2500 },
  { time: "दोपहर", sales: 5000 },
  { time: "शाम", sales: 5000 },
];

export default function SmartDashboardPage() {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-headline">VyaparBandhu</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Bot className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>
        </div>
      </header>

      {/* Greeting and Weather */}
      <div>
        <h2 className="text-xl font-semibold">नमस्ते राजू! 👋</h2>
        <p className="text-muted-foreground text-sm">आज: शनिवार, 15 अक्टूबर 2023</p>
        <p className="text-muted-foreground text-sm">⛅ मौसम: अच्छा, ग्राहक आने की संभावना अधिक</p>
      </div>

      {/* AI Suggestions */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-base font-semibold">
            <Target className="mr-2 h-5 w-5 text-primary" />
            AI सुझाव:
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>• चावल का स्टॉक कम है (कल 10kg खरीदें)</p>
          <p>• अमित का ₹2500 बकाया है (आज रिमाइंडर भेजें)</p>
          <p>• GSTR-3B कल ड्यू है (अभी तैयार करें)</p>
        </CardContent>
      </Card>
      
      {/* Real-time Metrics */}
      <div>
        <h3 className="text-lg font-semibold mb-2">📊 रियल-टाइम मेट्रिक्स:</h3>
        <div className="grid grid-cols-4 gap-4 text-center">
          <Card>
            <CardContent className="p-3 flex flex-col justify-center items-center h-full">
              <DollarSign className="h-6 w-6 mb-1 text-primary"/>
              <p className="font-bold text-lg">₹12.5K</p>
              <p className="text-xs text-muted-foreground">बिक्री</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 flex flex-col justify-center items-center h-full">
              <Archive className="h-6 w-6 mb-1 text-destructive"/>
              <p className="font-bold text-lg">8↓</p>
              <p className="text-xs text-muted-foreground">लो स्टॉक</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 flex flex-col justify-center items-center h-full">
              <Users className="h-6 w-6 mb-1 text-green-500"/>
              <p className="font-bold text-lg">2↑</p>
              <p className="text-xs text-muted-foreground">नए ग्रा.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 flex flex-col justify-center items-center h-full">
              <TrendingUp className="h-6 w-6 mb-1 text-green-500"/>
              <p className="font-bold text-lg">15%↑</p>
              <p className="text-xs text-muted-foreground">ग्रोथ</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-2">🚀 त्वरित एक्शन:</h3>
        <Card>
          <CardContent className="p-4 grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col items-center gap-1">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><Smartphone/></Button>
              <span className="text-xs">UPI बिल</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><Banknote/></Button>
              <span className="text-xs">पेमेंट</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><Package/></Button>
              <span className="text-xs">ऑर्डर</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><BarChartIcon/></Button>
              <span className="text-xs">रिपोर्ट</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">📈 आज का ट्रेंड:</CardTitle>
        </CardHeader>
        <CardContent className="h-40">
           <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${Number(value) / 1000}k`}/>
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" formatter={(value) => `₹${Number(value).toLocaleString('en-IN')}`} />} />
                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">🎉 उपलब्धियाँ:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span>7 दिन लगातार बिक्री</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Smartphone className="h-5 w-5 text-green-500" />
            <span>50 UPI पेमेंट्स</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span>5-स्टार रेटिंग</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
