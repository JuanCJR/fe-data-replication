import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { Flex, useDisclosure } from '@chakra-ui/react'
import { NavBarComponent } from './components/Navbar'
import { SideBar } from './components/Sidebar'
import { RightBar } from './components/Rightbar'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex display={'-ms-flexbox'}>
      {/* navbar */}
      <NavBarComponent onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <Flex height={'80vh'}>
        {/* Sidebar */}
        <SideBar onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
        {/* Content */}
        <Flex
          // bg={'blackAlpha.600'}
          w='100%'
          mt={4}
          padding={'1rem'}
          // className={styles.defaultBoxShadow}
        >
          {children}
        </Flex>
        {/* RightBar */}
        <RightBar onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      </Flex>
    </Flex>
  )
}
