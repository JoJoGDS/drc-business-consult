import ReservationForm from "@/components/ReservationForm";

export default function ReservationPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        Réserver un service
      </h1>
      <ReservationForm />
    </div>
  );
}
