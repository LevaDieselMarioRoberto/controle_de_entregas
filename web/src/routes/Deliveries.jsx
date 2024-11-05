import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import DateSelector from "../components/DateSelector";
import DeliveryTable from "../components/DeliveryTable";

export default function Deliveries() {
  const [ selectedDate, setSelectedDate ] = useState();
  const { deliveriesData, fetchTripsData } = useContext(DataContext);

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
      {deliveriesData && deliveriesData.map((deliveries) => {
        return (
          <div key={deliveries.id}>
            <DeliveryTable deliveries={deliveries} />
          </div>
        );
      })}
    </>
  )
}
