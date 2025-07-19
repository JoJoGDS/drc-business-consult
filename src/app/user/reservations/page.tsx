import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function ReservationsPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  // Get user's reservations
  const { data: reservations } = await supabase
    .from('reservations')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Mes Réservations</h2>
          <p className="text-muted-foreground">
            Consultez l'état de vos réservations
          </p>
        </div>
        <Button asChild>
          <Link href="/user/reservations/new">
            Nouvelle réservation
          </Link>
        </Button>
      </div>

      {reservations && reservations.length > 0 ? (
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="border rounded-lg p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{reservation.service_name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(reservation.date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
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
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Service</p>
                    <p>{reservation.service_name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Prix</p>
                    <p>{reservation.price} €</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Durée</p>
                    <p>{reservation.duration} minutes</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Référence</p>
                    <p className="font-mono text-sm">{reservation.id.slice(0, 8)}</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  {reservation.status === 'pending' && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/user/reservations/${reservation.id}/edit`}>
                        Modifier
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/user/reservations/${reservation.id}`}>
                      Détails
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground mb-4">
            Vous n'avez pas encore de réservations
          </p>
          <Button asChild>
            <Link href="/services">
              Découvrir nos services
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
