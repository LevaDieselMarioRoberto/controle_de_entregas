import { Divider, Flex, Spacer } from "@chakra-ui/react"
import LogoLevaDiesel from "./LogoLevaDiesel"
import Navbar from "./Navbar"
import User from "./User"

export default function Header() {
  return (
    <>
      <Flex
        as="header"
        justify="center"
        align="center"
        px="10px"
        h="42px"
      >
        <LogoLevaDiesel />
        <Spacer />
        <Navbar />
        <Spacer />
        <User />
      </Flex>
      <Divider orientation="horizontal" />
    </>
  )
}
