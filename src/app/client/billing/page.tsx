
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { invoices } from '@/lib/placeholder-data';
import { Download, CreditCard, FileText } from 'lucide-react';

export default function ClientBillingPage() {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'due':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const outstandingBalance = invoices
    .filter(inv => inv.status === 'Pending' || inv.status === 'Due')
    .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[^0-9.-]+/g,"")), 0);

  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold font-headline">Billing & Payments</h1>
        <p className="text-muted-foreground">Review your invoices and payment history.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Outstanding Balance</CardTitle>
            <CardDescription>Total amount due</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹{outstandingBalance.toLocaleString('en-IN')}</div>
            <p className="text-xs text-muted-foreground">Across {invoices.filter(inv => inv.status !== 'Paid').length} invoices</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-center">
            <CardContent className="flex flex-col items-center justify-center gap-4 text-center p-6">
                 <Button className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" /> Make a Payment
                </Button>
                 <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" /> View Payment History
                </Button>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>A list of all your past and current invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.project}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.issueDate}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download Invoice</span>
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
