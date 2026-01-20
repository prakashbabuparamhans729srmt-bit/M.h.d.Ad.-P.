'use client';

import {
  ArrowLeft,
  Save,
  FolderOpen,
  Zap,
  ChevronDown,
  Edit,
  Camera,
  Mic,
  Bot,
  Smartphone,
  Banknote,
  CreditCard,
  Wallet,
  CheckCircle,
  Repeat,
  Clipboard,
  Users,
  ShoppingBasket,
  FileText,
  Clock,
  UserPlus,
  ListChecks,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const bulkCustomers = [
    { name: 'अमित शर्मा', items: [{ name: 'चावल', qty: '2kg' }, { name: 'दाल', qty: '1kg' }], total: '₹280' },
    { name: 'राजेश कुमार', items: [{ name: 'तेल', qty: '1L' }, { name: 'साबुन', qty: '2' }], total: '₹250' },
];

const activeSubscriptions = [
    { id: 1, customer: 'राजेश', item: 'दैनिक दूध', amount: '₹60/दिन', next: 'कल' },
    { id: 2, customer: 'सीमा', item: 'साप्ताहिक फल', amount: '₹500/सप्ताह', next: 'Mon' },
    { id: 3, customer: 'अमित', item: 'मासिक राशन', amount: '₹2,000/महीना', next: '1st' },
]


export default function AdvancedBillingPage() {
  return (
    <div className="p-4 space-y-6 animate-in fade-in-50 duration-500">
      <header className="flex justify-between items-center">
        <Button variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
        <h1 className="text-xl font-bold font-headline">उन्नत बिलिंग</h1>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" title="Save">
            <Save />
          </Button>
          <Button variant="ghost" size="icon" title="Open">
            <FolderOpen />
          </Button>
        </div>
      </header>

      <Tabs defaultValue="smart-bill" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="smart-bill">स्मार्ट बिल</TabsTrigger>
          <TabsTrigger value="bulk-billing"><Clipboard className="mr-2 h-4 w-4"/>बल्क बिलिंग</TabsTrigger>
          <TabsTrigger value="recurring-billing"><Repeat className="mr-2 h-4 w-4"/>आवर्ती बिल</TabsTrigger>
        </TabsList>

        <TabsContent value="smart-bill" className="mt-6">
            <SmartInvoiceCreator />
        </TabsContent>
        <TabsContent value="bulk-billing" className="mt-6">
            <BulkBilling />
        </TabsContent>
        <TabsContent value="recurring-billing" className="mt-6">
            <RecurringBilling />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const SmartInvoiceCreator = () => (
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
);

const BulkBilling = () => (
    <div className="space-y-6">
        <div className="text-center">
            <h2 className="text-lg font-semibold">बल्क बिलिंग</h2>
            <p className="text-muted-foreground text-sm">एक साथ 5 ग्राहकों तक के बिल बनाएं</p>
        </div>

        {bulkCustomers.map((cust, index) => (
            <div key={index}>
                <Label>{`ग्राहक ${index+1}: ${cust.name}`}</Label>
                <Card className="mt-1">
                    <CardContent className="p-3 space-y-2">
                        {cust.items.map((item, itemIndex) => (
                           <div key={itemIndex} className="flex justify-between text-sm">
                               <span>{`${item.name} - ${item.qty}`}</span>
                               {itemIndex === 0 && <Button variant="ghost" size="icon" className="h-7 w-7"><Edit className="h-4 w-4"/></Button>}
                           </div>
                        ))}
                        <Separator />
                        <p className="font-bold text-right">कुल: {cust.total}</p>
                    </CardContent>
                </Card>
            </div>
        ))}
         <Card>
            <CardContent className="p-3">
                <Button variant="link" className="w-full p-0 h-auto">
                    + ग्राहक 3: [नया ग्राहक जोड़ें]
                </Button>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-base flex items-center"><FileText className="mr-2 h-4 w-4"/> बल्क समरी:</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
                <div className="flex justify-between"><span className="flex items-center gap-1"><Users className="h-4 w-4"/>कुल ग्राहक:</span> <span className="font-bold">2</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-1"><ShoppingBasket className="h-4 w-4"/>कुल बिक्री:</span> <span className="font-bold">₹530</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-1"><FileText className="h-4 w-4"/>औसत बिल:</span> <span className="font-bold">₹265</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-1"><Clock className="h-4 w-4"/>अनुमानित समय बचत:</span> <span className="font-bold">15 मिनट</span></div>
            </CardContent>
        </Card>

        <div className="space-y-3">
            <Button className="w-full h-12 text-lg">सभी बिल एक साथ जनरेट करें</Button>
            <Button variant="secondary" className="w-full">WhatsApp ब्रॉडकास्ट</Button>
        </div>
    </div>
);

const RecurringBilling = () => (
    <div className="space-y-6">
        <div className="text-center">
            <h2 className="text-lg font-semibold">आवर्ती/सब्सक्रिप्शन बिल</h2>
            <p className="text-muted-foreground text-sm">स्वचालित मासिक, साप्ताहिक या दैनिक बिल सेट करें</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="text-base flex items-center"><UserPlus className="mr-2 h-4 w-4"/> सेटअप नया सब्सक्रिप्शन:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
                <Input placeholder="ग्राहक: अमित शर्मा" />
                <Input placeholder="आइटम: मासिक राशन" />
                <Input placeholder="अवधि: हर महीने की 1 तारीख" />
                <Input placeholder="मूल्य: ₹2,000/महीना" />
                <div className="flex items-center space-x-2">
                    <Checkbox id="auto-reminder" defaultChecked/>
                    <label htmlFor="auto-reminder" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">ऑटो-रिमाइंडर: बिल से 2 दिन पहले</label>
                </div>
                 <div className="flex items-center space-x-2">
                    <Checkbox id="auto-pay" />
                    <label htmlFor="auto-pay" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">ऑटो-पेमेंट: UPI ऑटोपे</label>
                </div>
                <Button className="w-full mt-2">सब्सक्रिप्शन जोड़ें</Button>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-base flex items-center"><ListChecks className="mr-2 h-4 w-4"/> एक्टिव सब्सक्रिप्शन:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {activeSubscriptions.map(sub => (
                    <div key={sub.id} className="text-sm p-2 rounded-md bg-muted/50">
                        <div className="flex justify-between">
                            <span className="font-semibold">{`${sub.id}. ${sub.customer} - ${sub.item}`}</span>
                            <span className="font-bold">{sub.amount}</span>
                        </div>
                        <p className="text-xs text-primary">अगला: {sub.next}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
        
         <Card>
            <CardHeader>
                <CardTitle className="text-base flex items-center"><Banknote className="mr-2 h-4 w-4"/> इस महीने का अनुमान:</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
                 <p>• सब्सक्रिप्शन: <span className="font-bold">₹15,000</span></p>
                 <p>• ऑटो-कलेक्शन: <span className="font-bold">85% सफलता दर</span></p>
            </CardContent>
        </Card>

    </div>
);


const Label = ({ htmlFor, className, children }: { htmlFor?: string, className?: string, children: React.ReactNode }) => (
    <label htmlFor={htmlFor} className={`text-base font-semibold text-foreground ${className}`}>
        {children}
    </label>
);

const Checkbox = ({ id, ...props }: { id: string, [key: string]: any }) => (
    <input type="checkbox" id={id} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" {...props} />
);
