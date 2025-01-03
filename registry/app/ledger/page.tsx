'use client';
import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { WalletCard } from '../components/WalletCard';


interface Transaction {
  id: string;
  type: Transaction;
  status: 'completed' | 'pending';
  amount: number;
  fromAddress?: string;
  toAddress: string;
  timestamp: Date;
  projectId?: string;
  userId: string;
  walletAddress: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

// Mock data for demonstration
const mockWallet = {
  address: '0x1234...5678',
  balance: {
    credits: 1000,
    tokens: 500,
    fiat: 25000,
    available: 800,
    retired: 100,
    pending: 100,
  },
  userId: 'user123',
  lastSynced: new Date(),
};

const mockProject = {
  id: '1',
  name: 'Amazon Rainforest Conservation',
  totalCredits: 10000,
  soldCredits: 3500,
  status: 'verified' as const,
  lastUpdated: new Date(),
};

const mockTransactions = [
  {
    id: '1',
    type: 'purchase' as const,
    status: 'completed' as const,
    amount: 100,
    toAddress: '0x1234...5678',
    timestamp: new Date(),
    projectId: '1',
    userId: 'user123',
    walletAddress: '0x1234...5678',
  },
  {
    id: '2',
    type: 'transfer' as const,
    status: 'pending' as const,
    amount: 50,
    fromAddress: '0x1234...5678',
    toAddress: '0x8765...4321',
    timestamp: new Date(),
    userId: 'user123',
    walletAddress: '0x1234...5678',
  },
  {
    id: '2',
    type: 'transfer' as const,
    status: 'pending' as const,
    amount: 50,
    fromAddress: '0x1234...5678',
    toAddress: '0x8765...4321',
    timestamp: new Date(),
    userId: 'user123',
    walletAddress: '0x1234...5678',
  },
  {
    id: '2',
    type: 'transfer' as const,
    status: 'pending' as const,
    amount: 50,
    fromAddress: '0x1234...5678',
    toAddress: '0x8765...4321',
    timestamp: new Date(),
    userId: 'user123',
    walletAddress: '0x1234...5678',
  },
];

function App() {
  return (
    <div className="min-h-screen  bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">


          <div className="relative">


          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <WalletCard wallet={mockWallet} />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ProjectCard project={mockProject} />
          <ProjectCard project={mockProject} />
          <ProjectCard project={mockProject} />
          <ProjectCard project={mockProject} />
        </div> */}

        <div className="bg-[#232228]  shadow rounded-xl">
          <div className="px-4 py-5 sm:px-6 border-b border-zinc-500/50">
            <h3 className="text-xl leading-6 font-semibold text-zinc-300">
              Recent Transactions
            </h3>
          </div>
          <TransactionList transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
