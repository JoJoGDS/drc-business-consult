import { createClient } from '@/lib/supabase/server';
import { notFound, redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default async function ReservationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  // Get the reservation
  const { data: reservation } = await supabase
    .from('reservations')
    .select('*')
    .eq('id', params.id)
    .single();

  if (!reservation) {
    notFound();
  }

  // Check if the reservation belongs to the user
  if (reservation.user_id !== user.id) {
    return redirect('/user/reservations');
  }

  const reservationDate = new Date(reservation.date);
  const isUpcoming = new Date(reservation.date) > new Date();
  const canCancel = isUpcoming && reservation.status === 'pending';

  const handleCancel = async () => {
    'use server';
    
    const supabase = createClient();
    const { error } = await supabase
      .from('reservations')
      .update({ status: 'cancelled' })
      .eq('id', params.id);

    if (error) {
      console.error('Error cancelling reservation:', error);
      throw new Error('Impossible d\'annuler la réservation');
    }

    return { success: true };
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Détails de la réservation</h2>
          <p className="text-muted-foreground">
            Référence: {reservation.id.slice(0, 8).toUpperCase()}
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/user/reservations">
            Retour aux réservations
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-medium mb-4">Détails du service</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service</span>
                <span>{reservation.service_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date</span>
                <span>{format(reservationDate, 'PPPP', { locale: fr })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Heure</span>
                <span>{format(reservationDate, 'HH:mm')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Durée</span>
                <span>{reservation.duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Prix</span>
                <span className="font-medium">{reservation.price} €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Statut</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  reservation.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : reservation.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {reservation.status === 'confirmed' 
                    ? 'Confirmée' 
                    : reservation.status === 'pending'
                    ? 'En attente de confirmation'
                    : 'Annulée'}
                </span>
              </div>
            </div>
          </div>

          {reservation.notes && (
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-medium mb-4">Notes supplémentaires</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {reservation.notes}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-medium mb-4">Actions</h3>
            <div className="space-y-3">
              {canCancel && (
                <form action={handleCancel}>
                  <Button 
                    type="submit" 
                    variant="destructive" 
                    className="w-full"
                  >
                    Annuler la réservation
                  </Button>
                </form>
              )}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">
                  Contacter le support
                </Link>
              </Button>
              {isUpcoming && reservation.status === 'pending' && (
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/user/reservations/${reservation.id}/edit`}>
                    Modifier la réservation
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-medium mb-4">Informations importantes</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Présentez-vous 5 minutes avant l'heure prévue.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Annulation possible jusqu'à 24h avant le rendez-vous.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Paiement sur place par carte ou espèces.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
