import { Outlet } from "react-router-dom"
import { Flex, Box } from '@chakra-ui/react'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
      <Box
        as="main" 
        textAlign="center"
        my="20px"
        flex="1"
      >
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}
