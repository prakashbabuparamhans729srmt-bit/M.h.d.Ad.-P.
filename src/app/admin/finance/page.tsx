
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Banknote, ArrowUp, ArrowDown, Wallet, BookUser, AlertTriangle, BadgePercent } from 'lucide-react';

const summaryData = [
    { title: 'कुल आय', value: '₹45,20,000', change: '+18.2%', icon: <ArrowUp className="text-green-500" />, changeColor: 'text-green-500' },
    { title: 'कुल खर्च', value: '₹18,75,000', change: '+12.5%', icon: <ArrowUp className="text-red-500" />, changeColor: 'text-red-500' },
    { title: 'निवल लाभ', value: '₹26,45,000', change: '+22.8%', icon: <ArrowUp className="text-green-500" />, changeColor: 'text-green-500' },
    { title: 'रिसीवेबल्स', value: '₹12,50,000', subtitle: '(15 इनवॉइस)', icon: <BookUser /> },
    { title: 'ओवरड्यू', value: '₹3,20,000', subtitle: '(8 इनवॉइस)', icon: <AlertTriangle className="text-destructive" /> },
    { title: 'कैश फ्लो', value: '₹8,75,000', subtitle: 'पॉज़िटिव', icon: <Wallet /> },
];

const transactions = [
    { id: '#INV-1089', client: 'राजेश इंड.', amount: '₹45,000', status: 'paid' },
    { id: '#SAL-0424', client: 'राहुल वेतन', amount: '₹85,000', status: 'paid' },
    { id: '#INV-1042', client: 'राजेश इंड.', amount: '₹87,500', status: 'pending' },
    { id: '#EXP-0423', client: 'सर्वर होस्टिंग', amount: '₹25,000', status: 'paid' },
    { id: '#INV-1067', client: 'सीमा टेक', amount: '₹25,000', status: 'paid' },
    { id: '#TAX-0424', client: 'GST भुगतान', amount: '₹1,45,000', status: 'paid' },
    { id: '#INV-1089', client: 'अमित स्टोर्स', amount: '₹45,000', status: 'due' },
];

const bankAccounts = [
    { name: 'HDFC बैंक', balance: '₹18,75,000', income: '₹32,50,000', expense: '₹15,20,000' },
    { name: 'ICICI बैंक', balance: '₹8,45,000', income: '₹12,70,000', expense: '₹3,55,000' },
    { name: 'पेपैल', balance: '₹2,50,000', income: '₹3,50,000', expense: '₹1,25,000' },
];

const revenueBreakdown = [
    { source: 'वेबसाइट', percentage: 42, amount: '₹19.0L' },
    { source: 'मोबाइल ऐप', percentage: 28, amount: '₹12.7L' },
    { source: 'वेब ऐप', percentage: 18, amount: '₹8.1L' },
    { source: 'कस्टम', percentage: 12, amount: '₹5.4L' },
];

export default function FinanceManagementPage() {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'paid': return <span className="text-green-500">✅</span>;
            case 'pending': return <span className="text-yellow-500">⏳</span>;
            case 'due': return <span className="text-blue-500">📅</span>;
            default: return null;
        }
    };

    return (
        <div className="grid gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-headline">फाइनेंस मैनेजमेंट</h1>
                <Button variant="outline"><Banknote className="mr-2 h-4 w-4" /> बैंकिंग</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>फाइनेंशियल सारांश - अप्रैल 2024</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-3">
                    {summaryData.map(item => (
                        <Card key={item.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                {item.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{item.value}</div>
                                {item.change && <p className={`text-xs ${item.changeColor}`}>{item.change}</p>}
                                {item.subtitle && <p className="text-xs text-muted-foreground">{item.subtitle}</p>}
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><BadgePercent /> रेवेन्यू ब्रेकडाउन</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {revenueBreakdown.map(item => (
                            <div key={item.source} className="flex justify-between items-center text-sm">
                                <span>{item.source}</span>
                                <span className="font-semibold">{item.percentage}% ({item.amount})</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>रीसेंट ट्रांजैक्शन्स</CardTitle>
                        <CardDescription>हाल के सभी वित्तीय लेनदेन देखें।</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {transactions.map(tx => (
                                <li key={tx.id} className="flex justify-between items-center text-sm">
                                    <div>
                                        <span className="font-medium">{tx.id}:</span> {tx.client}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">{tx.amount}</span>
                                        {getStatusIcon(tx.status)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">📥 स्टेटमेंट</Button>
                            <Button variant="secondary" size="sm">🧾 सभी ट्रांजैक्शन</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>बैंक एकाउंट्स और पेमेंट्स</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>एकाउंट</TableHead>
                                <TableHead>बैलेंस</TableHead>
                                <TableHead>इनकम (महीना)</TableHead>
                                <TableHead>एक्सपेंस (महीना)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bankAccounts.map(acc => (
                                <TableRow key={acc.name}>
                                    <TableCell className="font-medium">{acc.name}</TableCell>
                                    <TableCell>{acc.balance}</TableCell>
                                    <TableCell className="text-green-600">{acc.income}</TableCell>
                                    <TableCell className="text-red-600">{acc.expense}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4 font-bold text-lg">
                        कुल बैलेंस: ₹29,70,000
                    </div>
                </CardContent>
            </Card>

             <div className="flex flex-wrap gap-2">
                <Button variant="outline">📅 टैक्स रिपोर्ट</Button>
                <Button variant="outline">📊 प्रॉफिट & लॉस</Button>
                <Button variant="outline">🧾 ऑडिट लॉग</Button>
                <Button variant="outline">🏦 रिकंसिलिएशन</Button>
            </div>
        </div>
    );
}
