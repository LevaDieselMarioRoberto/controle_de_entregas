import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import DateSelector from "../components/DateSelector";
import TripsTable from "../components/TripsTable";

export default function Trips() {
  const [ selectedDate, setSelectedDate ] = useState();
  const { tripsData, fetchTripsData } = useContext(DataContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (selectedDate) {
      fetchTripsData(selectedDate);
    }
  }, [selectedDate]);

  return (
    <>
      <DateSelector onDateChange={handleDateChange} />
      <div>
        {tripsData ? (
          tripsData.length > 0 ? (
            <TripsTable tripsData={tripsData} />
          ) : (
            <p>Sem viagens disponíveis na data selecionada</p>
          )
        ) : (
          <p>Carregando viagens...</p>
        )}
      </div>
    </>
  );
}
