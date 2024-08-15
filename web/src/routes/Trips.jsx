import { useState, useEffect, useContext } from "react";
import { Text, Spinner } from '@chakra-ui/react'
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
            <Text mt="50px">Sem viagens registradas na data selecionada</Text>
          )
        ) : (
          <Spinner
            thickness='2px'
            speed='0.65s'
            emptyColor='gray.200'
            color='red.500'
            size='lg'
            mt="50px"
          />
        )}
      </div>
    </>
  );
}
