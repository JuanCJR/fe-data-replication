'use client'
import { Flex, useDisclosure } from '@chakra-ui/react'
import { NavBarComponent } from './components/Navbar'
import { SideBar } from './components/Sidebar'
import { RightBar } from './components/Rightbar'
import { Content } from './components/Content'
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
        <Content>{children}</Content>
        {/* RightBar */}
        <RightBar onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      </Flex>
    </Flex>
  )
}
