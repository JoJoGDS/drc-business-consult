"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Reservation {
  id: string; // UUID
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string | null;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // Move fetchData outside useEffect so it can be called from anywhere in the component
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("reservations")
      .select(
        "id, name, email, phone, service, message, status, created_at"
      ); // Removed updated_at
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setData(data as Reservation[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [supabase]);

  const handleConfirm = async (id: string) => {
    const { error } = await supabase
      .from("reservations")
      .update({ status: "confirmed" })
      .eq("id", id);
    if (error) {
      console.error("Error confirming reservation:", error);
    } else {
      fetchData(); // Now fetchData is accessible here
    }
  };

  const handleDecline = async (id: string) => {
    const { error } = await supabase
      .from("reservations")
      .update({ status: "cancelled" })
      .eq("id", id);
    if (error) {
      console.error("Error declining reservation:", error);
    } else {
      fetchData(); // Now fetchData is accessible here
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Message</th>
            <th>Status</th>
            <th>Created At</th>
            {/* Removed Updated At column */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.service}</td>
              <td>{row.message}</td>
              <td>
                {row.status === "pending" && "⏳ En attente"}
                {row.status === "confirmed" && "✅ Confirmé"}
                {row.status === "cancelled" && "❌ Annulé"}
              </td>
              <td>{row.created_at}</td>
              {/* Removed updated_at */}
              <td>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                  onClick={() => handleConfirm(row.id)}
                >
                  Confirmer
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDecline(row.id)}
                >
                  Annuler
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}