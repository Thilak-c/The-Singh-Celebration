"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TotalsDisplay from "/components/TotalsDisplay";




const AdminDashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [salesData, setSalesData] = useState({
        daily: 0,
        weekly: 0,
        allTime: 0,
    });

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('/api/transactions');
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);
    // const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch("/api/transactions");
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    return (


        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* Header */}


            <div className=" bg-gray-900 text-white">
                <header className="p-6 bg-gray-800">
                    <h1 className=" font-bold">Admin Dashboard</h1>
                </header>
                <main className="py-6 space-y-6">
                    {loading ? (
                        <p className="text-center ">Loading transactions...</p>
                    ) : (
                        <TotalsDisplay transactions={transactions} />
                    )}
                </main>
            </div>

            <div className=' justify-between'>

                <Link href="admin/post/data" >
                    <button className="py-2 px-1  bg-blue-600 hover:bg-blue-500 rounded-lg mb-4">
                        Add New Transactions
                    </button>
                </Link>
                <Link href="admin/post/photo" >
                    <button className="py-2 px-1 mx-2 bg-green-600 hover:bg-green-500 rounded-lg mb-4">
                        Add New Photo
                    </button>
                </Link>

                <Link href={"/login/admin/messages"}>
                    <button className="justify-items-center py-2 px-1 mx-0 bg-yellow-500 hover:bg-yellow-400 rounded-lg mb-4">
                        Messages
                    </button>
                </Link>
            </div>
            {/* Recent Transactions */}
            <section className="bg-gray-800 overflow-auto p-6 min-h-screen rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
                                <tr key={transaction._id} className="border-t  border-gray-700">
                                    <td className="px-4 text-center py-2">{new Date(transaction.date).toLocaleDateString()}</td>
                                    <td className="px-4 text-center py-2">{transaction.customer}</td>
                                    <td className="px-4 text-green-500 text-center py-2">₹ {transaction.amount}</td>
                                    <td className={`px-4 text-center py-2 `}>{transaction.description}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">
                                    No transactions available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminDashboard;

