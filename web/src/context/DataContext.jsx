import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ tripsData, setTripsData ] = useState(null);
  const [ deliveriesData, setDeliveriesData ] = useState(null);

  const fetchTripsData = async (selectedDate) => {
    try {
      const response = await fetch(`http://localhost:3000/trips`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const filteredData = data["0"][selectedDate] || [];

      const mappedTrips = filteredData.map((truckTrips) => {
        const truckId = Object.keys(truckTrips)[0];
        return {
          truckId,
          trips: truckTrips[truckId],
        };
      });

      setTripsData(mappedTrips);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    // fetchTripsData('2024-08-09');
  }, []);

  return (
    <DataContext.Provider value={{ tripsData, setTripsData, deliveriesData, setDeliveriesData, fetchTripsData }}>
      {children}
    </DataContext.Provider>
  );
};
