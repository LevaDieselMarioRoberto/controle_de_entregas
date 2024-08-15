import { useContext } from 'react';
import { Card, CardHeader, CardBody, SimpleGrid, Text } from '@chakra-ui/react';
import { DataContext } from '../context/DataContext';

export default function Trucks() {
  const { trucksData, driversData } = useContext(DataContext);

  const findDriverById = (driverId) => {
    return driversData?.find(driver => driver.id == driverId.toString());
  };

  return (
    <>
      <h3>Caminhões</h3>
      {trucksData ? (
        trucksData.length > 0 ? (
          <SimpleGrid w="90%" m="15px auto" minChildWidth="170px" spacing={5} justifyItems="center">
            {trucksData.map(truck => {
              const driver = findDriverById(truck.default_driver_id);
              return (
                <Card 
                  key={truck.id}
                  borderTop="4px"
                  borderColor="red.500"
                  bg="gray.50"
                  w="180px"
                  h="160px"
                >
                  <CardHeader p="15px">
                    <Text>Caminhão {truck.id}</Text>
                  </CardHeader>
                  <CardBody p="15px">
                    <Text>Capacidade: {truck.capacity}</Text>
                    <Text>Motorista: {findDriverById(truck.default_driver_id).first_name}</Text>
                  </CardBody>
                </Card>
              )
            })}
          </SimpleGrid>
        ) : (
          <p>No trucks available.</p>
        )
      ) : (
        <p>Loading trucks...</p>
      )}
    </>
  )
}
