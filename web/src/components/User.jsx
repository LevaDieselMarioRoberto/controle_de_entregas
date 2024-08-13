import { HStack, Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

export default function User() {
  return (
    <HStack spacing="20px">
      <Box 
        bg="red.500"
        color="white"
        borderRadius="50%"
        w="30px"
        h="30px"
        textAlign="center"
        alignContent="center"
      >
        IM
      </Box>
      <Text fontSize="10px">isabellamoura@...</Text>
      <Button colorScheme="red" h="30px">Sair</Button>
    </HStack>
  )
}
