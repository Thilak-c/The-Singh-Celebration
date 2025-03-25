"use client";

import { useEffect, useState } from "react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch("/api/admin/messages");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        setMessages(data.messages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  if (loading) return <p className="min-h-screen">Loading messages...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-4 min-h-screen bg-slate-900">
      <h1 className="text-2xl font-bold mb-4">Admin Messages</h1>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="overflow-x-auto">
            <div className="py-8 text-[20px] ">Totol Messages <samp className=" text-green-500"> {messages.length} </samp> </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Message</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id}>
                  <td className="border border-gray-300 p-2 text-xs">{msg.name}</td>
                  <td className="border border-gray-300 p-2 text-xs">{msg.phone}</td>
                  <td className="border border-gray-300 p-2 text-xs">{msg.email}</td>
                  <td className="border border-gray-300 p-2 text-xs">{msg.message}</td>
                  <td className="border border-gray-300 p-2 text-xs">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
