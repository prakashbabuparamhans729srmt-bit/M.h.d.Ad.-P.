'use client';

import {
  ArrowLeft,
  Save,
  FolderOpen,
  Zap,
  Search,
  ChevronDown,
  Edit,
  Camera,
  Mic,
  Bot,
  Smartphone,
  Banknote,
  CreditCard,
  Wallet,
  Gift,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const customer = {
  name: 'अमित शर्मा',
  phone: '+91 98765 43210',
  due: '₹2,500',
  status: '⭐ VIP ग्राहक',
};

const items = [
  { name: 'चावल', price: '₹80', qty: 2, suggestion: 'पिछला ऑर्डर: 2kg' },
  { name: 'दाल', price: '₹120', qty: 1, suggestion: 'AI सुझाव: 1kg' },
  { name: 'तेल', price: '₹200', qty: 1, suggestion: 'ट्रेंडिंग आइटम' },
];

export default function SmartInvoiceCreatorPage() {
  return (
    <div className="p-4 space-y-6 animate-in fade-in-50 duration-500">
      <header className="flex justify-between items-center">
        <Button variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
        <h1 className="text-xl font-bold font-headline">स्मार्ट बिल क्रिएटर</h1>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Save />
          </Button>
          <Button variant="ghost" size="icon">
            <FolderOpen />
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Zap className="h-4 w-4" /> Quick Bill
          </Button>
        </div>
      </header>

      <main className="space-y-6">
        <div>
          <Label htmlFor="customer-search">🔍 ग्राहक खोजें या नया जोड़ें</Label>
          <Card className="mt-2">
            <CardContent className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{customer.name}</p>
                  <p className="text-sm text-muted-foreground">{customer.phone}</p>
                  <p className="text-sm text-destructive font-semibold">बकाया: {customer.due}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                   <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{customer.status}</Badge>
                   <ChevronDown className="text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
            <Label>📦 आइटम्स (स्मार्ट सुझाव):</Label>
            <Card className="mt-2">
                <CardContent className="p-4 space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="flex-1">
                                <p className="font-semibold">{`${index+1}. ${item.name}`}</p>
                                <p className="text-xs text-muted-foreground">{`[${item.suggestion}]`}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span>{`${item.price} x ${item.qty}`}</span>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 w-4"/></Button>
                            </div>
                        </div>
                    ))}
                    <Separator />
                    <div className="flex justify-around items-center pt-2">
                         <Button variant="outline" size="sm" className="gap-2"><Camera className="h-4 w-4"/> बारकोड स्कैन</Button>
                         <Button variant="outline" size="sm" className="gap-2"><Mic className="h-4 w-4"/> वॉयस एड</Button>
                         <Button variant="outline" size="sm" className="gap-2"><Bot className="h-4 w-4"/> AI सुझाव</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
        
        <Card>
            <CardContent className="p-4 font-bold text-center text-lg">
                कुल: ₹480 + GST ₹86.4 = <span className="text-primary">₹566.4</span>
            </CardContent>
        </Card>

        <div>
            <Label>🏦 पेमेंट ऑप्शन्स:</Label>
             <Card className="mt-2">
                <CardContent className="p-4 grid grid-cols-4 gap-2 text-center">
                    <div className="flex flex-col items-center gap-1">
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><Smartphone/></Button>
                        <span className="text-xs">UPI</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><Banknote/></Button>
                        <span className="text-xs">नेट बैंकिंग</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><CreditCard/></Button>
                        <span className="text-xs">क्रेडिट कार्ड</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full"><Wallet/></Button>
                        <span className="text-xs">कैश</span>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div>
             <Label>🎁 ऑफर्स (ऑटो अप्लाई):</Label>
             <Card className="mt-2 bg-green-500/10 border-green-500/20">
                <CardContent className="p-4 space-y-2 text-sm text-green-700 dark:text-green-300">
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/> 5% छूट (₹500+ बिल पर)</p>
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/> फ्री डिलीवरी (₹1000+ पर)</p>
                </CardContent>
            </Card>
        </div>

         <Button className="w-full h-12 text-lg">बिल जनरेट करें और शेयर करें</Button>

      </main>
    </div>
  );
}

// Add a new Label component to be used in this page
const Label = ({ htmlFor, className, children }: { htmlFor?: string, className?: string, children: React.ReactNode }) => (
    <label htmlFor={htmlFor} className={`text-base font-semibold text-foreground ${className}`}>
        {children}
    </label>
);
