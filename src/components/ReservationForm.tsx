"use client";
import { useState } from "react";

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    } else {
      alert("Erreur lors de l’envoi !");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      {success && (
        <p className="text-green-600 text-center mb-4">
          ✅ Votre réservation a été envoyée !
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Votre nom"
          required
          className="border p-2 w-full rounded"
        />
        <input
          name="email"
          placeholder="Votre email"
          type="email"
          required
          className="border p-2 w-full rounded"
        />
        <input
          name="phone"
          placeholder="Votre téléphone"
          className="border p-2 w-full rounded"
        />
        <select
          name="service"
          required
          className="border p-2 w-full rounded"
        >
          <option value="Visite RDC">Visite RDC</option>
          <option value="Business">Business</option>
          <option value="Assurances">Assurances</option>
        </select>
        <textarea
          name="message"
          placeholder="Votre message"
          className="border p-2 w-full rounded"
        />
        <button
          disabled={loading}
          className="bg-orange-500 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Envoi..." : "Réserver"}
        </button>
      </form>
    </div>
  );
}
