"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

// Mock services data - replace with actual data fetching
const services = [
  { id: 'consulting', name: 'Consultation Initiale', duration: 60, price: 120 },
  { id: 'strategy', name: 'Stratégie d\'Entreprise', duration: 90, price: 250 },
  { id: 'marketing', name: 'Plan Marketing', duration: 120, price: 350 },
  { id: 'finance', name: 'Analyse Financière', duration: 90, price: 280 },
];

// Available time slots
const timeSlots = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

export default function NewReservationPage() {
  const router = useRouter();
  const supabase = createClient();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedService = services.find(s => s.id === service);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !service) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const [hours, minutes] = time.split(':').map(Number);
      const dateTime = new Date(date);
      dateTime.setHours(hours, minutes, 0, 0);

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Utilisateur non connecté');

      const { error } = await supabase.from('reservations').insert([
        {
          user_id: user.id,
          service_id: service,
          service_name: selectedService?.name || '',
          date: dateTime.toISOString(),
          duration: selectedService?.duration || 60,
          price: selectedService?.price || 0,
          status: 'pending',
          notes: notes || null,
        },
      ]);

      if (error) throw error;

      router.push('/user/reservations');
      router.refresh();
    } catch (err: any) {
      console.error('Error creating reservation:', err);
      setError(err.message || 'Une erreur est survenue lors de la création de la réservation');
    } finally {
      setIsLoading(false);
    }
  };

  // Disable past dates and Sundays
  const isDateDisabled = (date: Date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Nouvelle Réservation</h2>
        <p className="text-muted-foreground">
          Remplissez le formulaire pour réserver un créneau
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Choisissez un service</h3>
              <Select onValueChange={setService} value={service}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name} - {service.duration}min - {service.price}€
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Choisissez une date</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={isDateDisabled}
                locale={fr}
                className="rounded-md border p-4"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Choisissez un horaire</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`px-4 py-2 rounded-md border ${
                      time === slot
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Détails de la réservation</h3>
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span>{selectedService?.name || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span>
                    {date ? format(date, 'PPP', { locale: fr }) : '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Horaire:</span>
                  <span>{time || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Durée:</span>
                  <span>{selectedService?.duration || 0} minutes</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Prix:</span>
                  <span>{selectedService?.price || 0} €</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">
                Notes supplémentaires (optionnel)
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder="Avez-vous des informations supplémentaires à nous communiquer ?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="flex justify-end space-x-4 pt-4">
          <Button variant="outline" asChild>
            <Link href="/user/reservations">
              Annuler
            </Link>
          </Button>
          <Button 
            type="submit" 
            disabled={isLoading || !date || !time || !service}
            className="bg-gradient-to-r from-[#F05E0E] to-[#FFA500] hover:opacity-90"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enregistrement...
              </>
            ) : (
              'Confirmer la réservation'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
