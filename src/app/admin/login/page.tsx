"use client";

import { useEffect, useState } from "react";
import AdminLogin from "@/components/AdminLogin";

interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string | null;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [data, setData] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Fetch data from Django API
  const fetchData = async () => {
    if (!authToken) return;

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/reservations/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${authToken}`,
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid
          handleLogout();
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reservations = await response.json();
      setData(reservations);
      setError(null);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && authToken) {
      fetchData();
    }
  }, [isAuthenticated, authToken]);

  const handleLoginSuccess = (token: string) => {
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    setAuthToken(null);
    setIsAuthenticated(false);
    setData([]);
  };

  const handleConfirm = async (id: number) => {
    if (!authToken) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/reservations/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${authToken}`,
          },
          body: JSON.stringify({ status: "confirmed" }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchData(); // Refresh the data
    } catch (err) {
      console.error("Error confirming reservation:", err);
      setError(
        err instanceof Error ? err.message : "Failed to confirm reservation"
      );
    }
  };

  const handleDecline = async (id: number) => {
    if (!authToken) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/reservations/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${authToken}`,
          },
          body: JSON.stringify({ status: "cancelled" }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchData(); // Refresh the data
    } catch (err) {
      console.error("Error declining reservation:", err);
      setError(
        err instanceof Error ? err.message : "Failed to decline reservation"
      );
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  // Filter data based on status
  const filteredData = data.filter((reservation) => {
    if (filter === "all") return true;
    return reservation.status === filter;
  });

  // Statistics
  const stats = {
    total: data.length,
    pending: data.filter((r) => r.status === "pending").length,
    confirmed: data.filter((r) => r.status === "confirmed").length,
    cancelled: data.filter((r) => r.status === "cancelled").length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 flex flex-col items-center border border-white/20">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-orange-500"></div>
            <div className="absolute inset-0 rounded-full h-20 w-20 border-t-4 border-b-4 border-orange-300 animate-pulse"></div>
          </div>
          <p className="text-gray-700 font-medium text-lg mt-6">Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 flex items-center justify-center p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center max-w-lg w-full border border-white/20">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Erreur</h2>
          <p className="text-gray-600 mb-8 text-lg">{error}</p>
          <button
            onClick={fetchData}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header with User Info */}
      <div className="bg-white/90 backdrop-blur-sm shadow-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord Admin</h1>
                <p className="text-gray-600 mt-1 text-lg">Gestion des réservations et demandes</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3 bg-gray-50 rounded-xl px-4 py-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Administrateur</span>
              </div>
              
              <button
                onClick={fetchData}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Actualiser</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Added proper spacing after header */}
      <div className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Total</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.total}</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">En attente</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.pending}</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-2xl">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Confirmées</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.confirmed}</p>
                </div>
                <div className="p-4 bg-green-100 rounded-2xl">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Annulées</p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">{stats.cancelled}</p>
                </div>
                <div className="p-4 bg-red-100 rounded-2xl">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Filter Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl mb-10 border border-white/20 overflow-hidden">
            <div className="p-8 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filtrer les réservations</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: "all", label: "Toutes", count: stats.total, color: "gray" },
                  { key: "pending", label: "En attente", count: stats.pending, color: "yellow" },
                  { key: "confirmed", label: "Confirmées", count: stats.confirmed, color: "green" },
                  { key: "cancelled", label: "Annulées", count: stats.cancelled, color: "red" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 ${
                      filter === tab.key
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      filter === tab.key 
                        ? "bg-white/20 text-white" 
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Reservations List */}
            {filteredData.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-xl font-medium">Aucune réservation trouvée</p>
                <p className="text-gray-400 mt-2">Essayez de changer les filtres pour voir plus de résultats</p>
              </div>
            ) : (
              <>
                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50/50">
                      <tr>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">ID</th>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Client</th>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Contact</th>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Service</th>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Statut</th>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date</th>
                        <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50/50 transition-all duration-200">
                          <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-gray-900">#{row.id}</td>
                          <td className="px-8 py-6">
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{row.name}</div>
                              {row.message && (
                                <div className="text-sm text-gray-500 truncate max-w-xs mt-1">{row.message}</div>
                              )}
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="text-sm font-medium text-gray-900">{row.email}</div>
                            <div className="text-sm text-gray-500">{row.phone || "N/A"}</div>
                          </td>
                          <td className="px-8 py-6 whitespace-nowrap">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                              {row.service}
                            </span>
                          </td>
                          <td className="px-8 py-6 whitespace-nowrap">
                            {row.status === "pending" && (
                              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200">
                                ⏳ En attente
                              </span>
                            )}
                            {row.status === "confirmed" && (
                              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                                ✅ Confirmé
                              </span>
                            )}
                            {row.status === "cancelled" && (
                              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                                ❌ Annulé
                              </span>
                            )}
                          </td>
                          <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-500 font-medium">
                            {new Date(row.created_at).toLocaleDateString("fr-FR")}
                          </td>
                          <td className="px-8 py-6 whitespace-nowrap text-sm space-x-3">
                            {row.status === "pending" && (
                              <>
                                <button
                                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                  onClick={() => handleConfirm(row.id)}
                                >
                                  Confirmer
                                </button>
                                <button
                                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                  onClick={() => handleDecline(row.id)}
                                >
                                  Annuler
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="lg:hidden p-6 space-y-6">
                  {filteredData.map((row) => (
                    <div key={row.id} className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">#{row.id} - {row.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{row.email}</p>
                          {row.phone && <p className="text-sm text-gray-600">{row.phone}</p>}
                        </div>
                        <div className="text-right">
                          {row.status === "pending" && (
                            <span className="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200">
                              ⏳ En attente
                            </span>
                          )}
                          {row.status === "confirmed" && (
                            <span className="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                              ✅ Confirmé
                            </span>
                          )}
                          {row.status === "cancelled" && (
                            <span className="inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                              ❌ Annulé
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <span className="text-xs font-semibold text-gray-500 w-20">Service:</span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                            {row.service}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs font-semibold text-gray-500 w-20">Date:</span>
                          <span className="text-xs text-gray-700 font-medium">{new Date(row.created_at).toLocaleDateString("fr-FR")}</span>
                        </div>
                        {row.message && (
                          <div>
                            <span className="text-xs font-semibold text-gray-500">Message:</span>
                            <p className="text-xs text-gray-700 mt-2 p-3 bg-white rounded-xl border">{row.message}</p>
                          </div>
                        )}
                      </div>

                      {row.status === "pending" && (
                        <div className="flex space-x-3">
                          <button
                            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            onClick={() => handleConfirm(row.id)}
                          >
                            Confirmer
                          </button>
                          <button
                            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            onClick={() => handleDecline(row.id)}
                          >
                            Annuler
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}