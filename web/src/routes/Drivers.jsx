import { useContext } from 'react';
import { Card, CardHeader, CardBody, SimpleGrid, Text } from '@chakra-ui/react';
import { DataContext } from '../context/DataContext';

export default function Drivers() {
  const { driversData } = useContext(DataContext);

  return (
    <>
      <h1>Motoristas</h1>
      {driversData ? (
        driversData.length > 0 ? (
          <SimpleGrid w="90%" m="15px auto" minChildWidth="170px" spacing={5} justifyItems="center">
            {driversData.map(driver => (
              <Card 
                key={driver.id}
                borderTop="4px"
                borderColor="red.500"
                bg="gray.50"
                w="180px"
                h="105px"
              >
                <CardHeader p="15px">
                  <Text>Motorista</Text>
                  <Text>{driver.first_name} {driver.last_name}</Text>
                </CardHeader>
              </Card>
            ))}
          </SimpleGrid>
        ) : (
          <p>No drivers available.</p>
        )
      ) : (
        <p>Loading drivers...</p>
      )}
    </>
  )
}
