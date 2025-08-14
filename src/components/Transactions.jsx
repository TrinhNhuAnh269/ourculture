import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';
import { Download, Filter, Search, Edit, Trash2 } from 'lucide-react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const demoTransactions = [
      { id: 'txn_1', campaign: 'Education for All', donor: 'John Doe', amount: 50, status: 'completed', date: '2025-08-12' },
      { id: 'txn_2', campaign: 'Clean Water Initiative', donor: 'Jane Smith', amount: 100, status: 'completed', date: '2025-08-11' },
      { id: 'txn_3', campaign: 'Education for All', donor: 'Peter Jones', amount: 25, status: 'pending', date: '2025-08-10' },
      { id: 'txn_4', campaign: 'Animal Shelter Fund', donor: 'Mary Johnson', amount: 75, status: 'failed', date: '2025-08-09' },
      { id: 'txn_5', campaign: 'Clean Water Initiative', donor: 'David Williams', amount: 200, status: 'completed', date: '2025-08-08' },
    ];
    setTransactions(demoTransactions);
  }, []);

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter(t => filter === 'all' || t.status === filter)
      .filter(t => 
        t.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [transactions, filter, searchTerm]);

  const exportToCSV = () => {
    const headers = ['ID', 'Campaign', 'Donor', 'Amount', 'Status', 'Date'];
    const rows = filteredTransactions.map(t => 
      [t.id, t.campaign, t.donor, t.amount, t.status, t.date].join(',')
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({ title: "Export Successful", description: "Transaction report has been downloaded." });
  };
  
  const handleNotImplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-white">Transaction Management</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/50 border-purple-500/30 focus:border-purple-500"
              />
            </div>
            <Button onClick={exportToCSV} variant="outline" className="border-purple-500/50 text-white hover:bg-purple-500/10">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-300">Filter by status:</span>
          {['all', 'completed', 'pending', 'failed'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filter === status 
                  ? 'bg-purple-600 text-white font-semibold' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="p-4 text-sm font-semibold text-gray-300">Transaction ID</th>
                <th className="p-4 text-sm font-semibold text-gray-300">Campaign</th>
                <th className="p-4 text-sm font-semibold text-gray-300">Donor</th>
                <th className="p-4 text-sm font-semibold text-gray-300">Amount</th>
                <th className="p-4 text-sm font-semibold text-gray-300">Date</th>
                <th className="p-4 text-sm font-semibold text-gray-300">Status</th>
                <th className="p-4 text-sm font-semibold text-gray-300 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map(t => (
                <motion.tr 
                  key={t.id} 
                  className="border-b border-purple-500/10 hover:bg-purple-500/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layout
                >
                  <td className="p-4 text-sm text-gray-400 font-mono">{t.id}</td>
                  <td className="p-4 text-sm text-white font-medium">{t.campaign}</td>
                  <td className="p-4 text-sm text-gray-300">{t.donor}</td>
                  <td className="p-4 text-sm text-white font-semibold">${t.amount.toFixed(2)}</td>
                  <td className="p-4 text-sm text-gray-400">{new Date(t.date).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(t.status)}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost" onClick={handleNotImplemented} className="text-gray-400 hover:text-white"><Edit className="w-4 h-4" /></Button>
                      <Button size="sm" variant="ghost" onClick={handleNotImplemented} className="text-red-500 hover:text-red-400"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTransactions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No transactions found for the current filter.
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default Transactions;