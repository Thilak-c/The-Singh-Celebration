"use client"

import React from "react";
import { useState } from "react";
const AddTransaction = () => {
    const [formData, setFormData] = useState({
        customer: "",
        amount: "",
        date: "",
        description: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure the amount is a number
        const amount = parseInt(formData.amount, 10);
        if (isNaN(amount)) {
            alert("Amount must be a valid number");
            return;
        }

        const data = { ...formData, amount };

        try {
            const response = await fetch("/api/transactions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Transaction saved successfully!");
                setFormData({ amount: "", description: "" });
            } else {
                const error = await response.json();
                alert(error.error || "Failed to save transaction");
            }
        } catch (error) {
            console.error("Error saving transaction:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-lg"
        >
            <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
            <label className="block mb-2">
                customer:
                <input
                    type="text"
                    value={formData.customer}
                    onChange={(e) => {

                        setFormData({ ...formData, customer: e.target.value })
                    }}
                    className="w-full p-2 mt-1 bg-gray-700 rounded"
                    required
                />
            </label>
            <label className="block mb-2">
                Amount:
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                />
            </label>
            <label className="block mb-2">
                Date:
                <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-2 mt-1 bg-gray-700 rounded"
                    required
                />
            </label>
            <label className="block mb-4">
                Description:
                <textarea
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full p-2 mt-1 bg-gray-700 rounded"
                    rows="3"
                />
            </label>
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
};
export default AddTransaction