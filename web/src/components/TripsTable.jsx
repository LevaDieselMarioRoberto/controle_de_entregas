import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export default function TripsTable({ tripsData }) {
  const { driversData } = useContext(DataContext);

  const findDriverById = (driverId) => {
    return driversData?.find(driver => driver.id === driverId.toString());
  };

  return (
    <TableContainer maxWidth="95%" m="20px auto" borderWidth="1px" borderRadius="10px">
      <Table size="sm" variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th rowSpan="2">Frota</Th>
            <Th rowSpan="2">Viagem</Th>
            <Th rowSpan="2">Motorista</Th>
            <Th rowSpan="2">Horário</Th>
            <Th colSpan="2">Carregamento</Th>
            <Th colSpan="2">Entregue</Th>
            <Th colSpan="2">Retorno</Th>
            <Th rowSpan="2">Odômetro</Th>
          </Tr>
          <Tr>
            <Th>s10</Th>
            <Th>s500</Th>
            <Th>s10</Th>
            <Th>s500</Th>
            <Th>s10</Th>
            <Th>s500</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tripsData.map((truck, index) => (
            truck.trips.map((trip, tripIndex) => (
              <Tr key={tripIndex}>
                <Td color="red.500">{truck.truckId}</Td>
                <Td>{trip.id}ª</Td>
                <Td>{findDriverById(trip.driver_id).first_name}</Td>
                <Td>{trip.initial_time} / {trip.final_time}</Td>
                <Td>{trip.initial_s10}</Td>
                <Td>{trip.initial_s500}</Td>
                <Td>{trip.s10_sold}</Td>
                <Td>{trip.s500_sold}</Td>
                <Td>{trip.initial_s10 - trip.s10_sold}</Td>
                <Td>{trip.initial_s500 - trip.s500_sold}</Td>
                <Td>{trip.initial_odometer} / {trip.final_odometer}</Td>
              </Tr>
            ))
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}