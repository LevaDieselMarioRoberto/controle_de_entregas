import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { CheckCircleIcon, InfoOutlineIcon, TimeIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Tooltip,
  Link 
} from '@chakra-ui/react'

export default function DeliveryTable({ deliveries }) {
  const { driversData } = useContext(DataContext);

  const findDriverById = (driverId) => {
    return driversData?.find(driver => driver.id == driverId.toString());
  };

  return (
    <Box
      p="5px"
      border="1px"
      w="95%"
      m="10px auto"
      borderRadius="15px"
      borderColor="red.500"
    >
      <Text fontSize='sm'>
        Caminhão: {deliveries.truck_id},
        Viagem: {deliveries.trip}ª,
        Motorista: {findDriverById(deliveries.driver_id).first_name}
      </Text>
      <Text fontSize='sm'>
        Horário: {deliveries.initial_time}-{deliveries.final_time},
        Duração: Calcular duração,
        Odometro: {deliveries.initial_odometer} - {deliveries.final_odometer},
        Percurso: {deliveries.final_odometer - deliveries.initial_odometer}km
      </Text>
      <Text fontSize='sm'>
        s10 Inicial: {deliveries.initial_s10}, s500 Inicial: {deliveries.initial_s500},
        s10 Vendido: {deliveries.s10_sold}, s500 Vendido: {deliveries.s500_sold},
        s10 em trânsito: {deliveries.initial_s10 - deliveries.s10_sold}, s500 em trânsito: {deliveries.initial_s500 - deliveries.s500_sold}
      </Text>

      <TableContainer
        maxWidth="95%"
        m="20px auto"
        borderWidth="1px"
        borderRadius="10px"
      >
        <Table size="sm" variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Cliente</Th>
              <Th>NF</Th>
              <Th>Req</Th>
              <Th>s10</Th>
              <Th>R/D</Th>
              <Th>s500</Th>
              <Th>R/D</Th>
              <Th>Início</Th>
              <Th>Término</Th>
              <Th>Duração</Th>
              <Th>Odômetro</Th>
              <Th>Dist. TRR</Th>
              <Th>Mapa</Th>
            </Tr>
          </Thead>
          <Tbody>
            {deliveries.deliveries.map((delivery, index) => {
            const link = `https://maps.google.com/maps?q=${delivery.latitude}%2C${delivery.longitude}&z=17&hl=pt-BR`
            return (
              <Tr key={index}>
                <Td>{delivery.client}</Td>
                <Td>{delivery.invoice}</Td>
                <Td>{delivery.request}</Td>
                <Td>{delivery.s10 > 0 ? delivery.s10 : "" }</Td>
                <Td>{delivery.s10 > 0 ? delivery.s10_register ? "R" : "D" : ""}</Td>
                <Td>{delivery.s500 > 0 ? delivery.s500 : "" }</Td>
                <Td>{delivery.s500 > 0 ? delivery.s500_register ? "R" : "D" : ""}</Td>
                <Td>{delivery.initial_time}</Td>
                <Td>{delivery.final_time}</Td>
                <Td>Calcular...</Td>
                <Td>{delivery.odometer}</Td>
                <Td>{delivery.odometer - deliveries.initial_odometer}km</Td>
                <Td>
                  <Link href={link} isExternal>
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Td>
              </Tr>
            )})}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
