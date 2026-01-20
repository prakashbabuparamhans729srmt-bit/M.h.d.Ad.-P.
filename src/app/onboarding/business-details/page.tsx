
import { ArrowLeft, Camera, MapPin, Banknote, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function BusinessDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 font-body animate-in fade-in-50 duration-500">
      <div className="w-full max-w-md">
        <header className="relative flex items-center justify-between py-4">
          <Link href="/onboarding/business-type">
            <Button variant="ghost" size="icon" aria-label="Back">
              <ArrowLeft />
            </Button>
          </Link>
          <h1 className="text-xl font-bold font-headline absolute left-1/2 -translate-x-1/2">
            व्यवसाय विवरण
          </h1>
          <Button variant="outline" size="sm">
            <Camera className="mr-2 h-4 w-4" />
            Scan
          </Button>
        </header>

        <main className="mt-8 space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="business-name">व्यवसाय का नाम</Label>
            <Input type="text" id="business-name" placeholder="राजू किराना स्टोर" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="address">
              <MapPin className="inline-block mr-2 h-4 w-4 text-primary" />
              पता (Google Maps से ऑटो)
            </Label>
            <Input type="text" id="address" placeholder="123, मेन रोड, मुंबई" />
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="gstin">
              🆔 GSTIN (ऑप्शनल)
            </Label>
            <Input type="text" id="gstin" placeholder="QR स्कैन करें या टाइप करें" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="whatsapp-number">📞 WhatsApp बिजनेस नंबर</Label>
            <Input type="tel" id="whatsapp-number" placeholder="+91 98765 43210" />
          </div>

          <div className="grid w-full items-center gap-1.5">
             <Label htmlFor="bank-account">
               <Banknote className="inline-block mr-2 h-4 w-4 text-primary" />
               प्राथमिक बैंक अकाउंट
             </Label>
            <Select>
              <SelectTrigger id="bank-account">
                <SelectValue placeholder="HDFC / SBI / ICICI / Axis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hdfc">HDFC Bank</SelectItem>
                <SelectItem value="sbi">State Bank of India</SelectItem>
                <SelectItem value="icici">ICICI Bank</SelectItem>
                <SelectItem value="axis">Axis Bank</SelectItem>
                 <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="p-4">
              <CardTitle className="flex items-center text-base font-semibold">
                <Lightbulb className="mr-2 h-5 w-5 text-yellow-400" />
                AI सुझाव: किराना स्टोर्स के लिए
              </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-4 text-sm text-muted-foreground space-y-2">
                <p>• दैनिक 50+ बिल</p>
                <p>• 100+ आइटम्स का स्टॉक</p>
                <p>• मासिक ₹5000 GST</p>
            </CardContent>
          </Card>

          <Button className="w-full h-12 text-lg" asChild>
            <Link href="/dashboard">सेटअप पूरा करें</Link>
          </Button>
        </main>
      </div>
    </div>
  );
}
