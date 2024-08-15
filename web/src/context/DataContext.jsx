import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ tripsData, setTripsData ] = useState(null);
  const [ deliveriesData, setDeliveriesData ] = useState(null);
  const [ trucksData, setTrucksData ] = useState(null);
  const [ driversData, setDriversData ] = useState(null);

  const fetchTripsData = async (selectedDate) => {
    try {
      setTripsData(null);
      await new Promise(r => setTimeout(r, 500));

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

  const fetchTrucksData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/trucks`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTrucksData(data);
    } catch (error) {
      console.error("Error fetching trucks:", error);
    }
  };

  const fetchDriversData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/drivers`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDriversData(data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  useEffect(() => {
    fetchTrucksData();
    fetchDriversData();
  }, []);

  return (
    <DataContext.Provider value={{
      tripsData, setTripsData,
      deliveriesData, setDeliveriesData,
      trucksData, setTrucksData,
      driversData, setDriversData,
      fetchTripsData, fetchTrucksData, fetchDriversData 
    }}>
      {children}
    </DataContext.Provider>
  );
};
