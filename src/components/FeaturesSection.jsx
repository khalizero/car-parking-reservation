import React from "react";
import AdvanceBooking from "./history/AdvanceBooking";  // Import the AdvanceBooking component
import PaymentHistory from "./history/PaymentHistory";  // Import the PaymentHistory component
import ParkingHistory from "./history/ParkingHistory";  // Import the ParkingHistory component

const Feature = () => {
  return (
    <div className="container mx-auto px-6 py-12" id="features">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Features
          </h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
       
      {/* Advance Booking Card */}
      <div className=" shadow-md rounded-lg p-6 space-y-4 border border-teal-500">
        <img 
          src="/advanceBooking.png" 
          alt="Advance Booking" 
          className="w-full h-fit object-cover rounded-t-lg"
        />
        <h3 className="text-teal-500 text-xl font-semibold">Advance Booking</h3>
        <AdvanceBooking userId={1} />
      </div>

      {/* Payment History Card */}
      <div className=" shadow-md rounded-lg p-6 space-y-4 border border-teal-500">
        <img 
          src="/paymenyHistory.png" 
          alt="Payment History" 
          className="w-full h-fit object-cover rounded-t-lg"
        />
        <h3 className="text-teal-500 text-xl font-semibold">Payment History</h3>
        <PaymentHistory userId={1} />
      </div>

      {/* Parking History Card */}
      <div className=" shadow-md rounded-lg p-6 space-y-4 border border-teal-500">
        <img 
          src="/parkingHistory.png" 
          alt="Parking History" 
          className="w-full h-fit object-cover rounded-t-lg"
        />
        <h3 className="text-teal-500 text-xl font-semibold">Parking History</h3>
        <ParkingHistory userId={1} />
      </div>
    </div>
    </div>
  );
};

export default Feature;
