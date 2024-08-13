import { Link } from 'react-router-dom'
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Tabs
      align='center'
      colorScheme='red'
    >

      <TabList>
        <Tab><Link to="/viagens">Viagens</Link></Tab>
        <Tab><Link to="/entregas">Entregas</Link></Tab>
        <Tab><Link to="/motoristas">Motoristas</Link></Tab>
        <Tab><Link to="/caminhoes">Caminhões</Link></Tab>
      </TabList>

      <TabIndicator
        mt='-1.5px'
        height='2px'
        bg='red.500'
      />

    </Tabs>
  )
}
