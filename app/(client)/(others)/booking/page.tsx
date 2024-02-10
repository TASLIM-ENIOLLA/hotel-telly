import { getRoomTypes } from "./actions";

import ReservationForm from "@/components/pages/booking/ReservationForm";

export default async function Page() {
  const roomTypes = await getRoomTypes();

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold capitalize">
              book now
            </div>
            <div className="text-slate-900 text-sm md:text-base font-light tracking-wider">
              Make a reservation for your stay at our hotel
            </div>
          </div>
        </div>
        <ReservationForm
          roomTypes={roomTypes}
        />
      </div>
    </section>
  );
}