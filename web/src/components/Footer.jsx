import { Flex, Text, Divider } from "@chakra-ui/react"
import LogoMarioRoberto from "./LogoMarioRoberto"

export default function Footer() {
  return (
    <>
      <Divider
        orientation="horizontal"
        w="50%"
        mx="auto"
      />
      <Flex
        as="footer"
        justify="center"
        align="center"
        h="42px"
        w="100%"
      >
        <LogoMarioRoberto />
        <Text
          fontSize="sm"
          ml="10px"
          color="gray.500"
        >©2024 - Todos os direitos reservados</Text>
      </Flex>
    </>
  )
}
