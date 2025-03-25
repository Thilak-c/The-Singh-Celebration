import { useEffect, useState } from "react";

const TotalsDisplay = ({ transactions }) => {
    const [totals, setTotals] = useState({
        dailyTotal: 0,
        weeklyTotal: 0,
        monthlyTotal: 0,
        allTimeTotal: 0,
    });

    useEffect(() => {
        const calculateTotals = () => {
            const now = new Date();
            const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const startOfWeek = new Date(startOfDay);
            startOfWeek.setDate(startOfWeek.getDate() - startOfDay.getDay());
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

            let dailyTotal = 0,
                weeklyTotal = 0,
                monthlyTotal = 0,
                allTimeTotal = 0;

            transactions.forEach((transaction) => {
                const transactionDate = new Date(transaction.date);
                const amount = parseFloat(transaction.amount);

                allTimeTotal += amount;

                if (transactionDate >= startOfDay) {
                    dailyTotal += amount;
                }
                if (transactionDate >= startOfWeek) {
                    weeklyTotal += amount;
                }
                if (transactionDate >= startOfMonth) {
                    monthlyTotal += amount;
                }
            });

            setTotals({ dailyTotal, weeklyTotal, monthlyTotal, allTimeTotal });
        };

        calculateTotals();
    }, [transactions]);

    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h2 className=" font-bold mb-4">Sales Summary</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className=" font-semibold text-yellow-400">Daily Total</h3>
                    <p className=" font-bold">₹{totals.dailyTotal.toFixed(2)}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className=" font-semibold text-yellow-400">Weekly Total</h3>
                    <p className=" font-bold">₹{totals.weeklyTotal.toFixed(2)}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className=" font-semibold text-yellow-400">Monthly Total</h3>
                    <p className=" font-bold">₹{totals.monthlyTotal.toFixed(2)}</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <h3 className=" font-semibold text-yellow-400">All-Time Total</h3>
                    <p className=" font-bold">₹{totals.allTimeTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default TotalsDisplay;
