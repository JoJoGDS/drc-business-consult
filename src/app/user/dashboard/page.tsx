import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function DashboardPage() {
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
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Bienvenue dans votre espace client</h2>
          <p className="text-muted-foreground">
            Gérez vos réservations et vos informations personnelles
          </p>
        </div>
        <Button asChild>
          <Link href="/user/reservations/new">
            Nouvelle réservation
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-medium">Réservations à venir</h3>
          <p className="text-2xl font-bold">
            {reservations?.filter(r => new Date(r.date) >= new Date()).length || 0}
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-medium">Réservations passées</h3>
          <p className="text-2xl font-bold">
            {reservations?.filter(r => new Date(r.date) < new Date()).length || 0}
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-medium">Statut du compte</h3>
          <p className="text-2xl font-bold text-green-600">Actif</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Vos prochaines réservations</h3>
        {reservations && reservations.length > 0 ? (
          <div className="space-y-4">
            {reservations.slice(0, 3).map((reservation) => (
              <div key={reservation.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{reservation.service_name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(reservation.date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
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
                      ? 'En attente'
                      : 'Annulée'}
                  </span>
                </div>
              </div>
            ))}
            {reservations.length > 3 && (
              <div className="text-center mt-4">
                <Button variant="ghost" asChild>
                  <Link href="/user/reservations">
                    Voir toutes les réservations
                  </Link>
                </Button>
              </div>
            )}
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
    </div>
  );
}
