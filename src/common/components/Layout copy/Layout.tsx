import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import styles from './Layout.module.css'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { NavBarComponent } from './components/Navbar'
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex display={'-ms-flexbox'}>
      {/* navbar */}
      <NavBarComponent onClose={onClose} onOpen={onOpen} isOpen={isOpen} />

      <Flex height={'80vh'}>
        {/* Sidebar */}
        <Flex
          bg={'white'}
          w={'15rem'}
          m={4}
          mb={0}
          className={styles.defaultBoxShadow}
          display={{ base: 'none', md: 'block' }}
        >
          {/* Sidebar content */}
          <Box>Sidebar</Box>

          {/* Drawer */}
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size='full'
          >
            <DrawerContent>
              <Box
                bg={'white'}
                transition='3s ease'
                w={{ base: 'full', md: 60 }}
                pos='fixed'
                h='full'
              >
                <Flex
                  h='20'
                  alignItems='center'
                  mx='8'
                  justifyContent='space-between'
                >
                  <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                  />
                </Flex>
                sidebar from drawer
              </Box>
            </DrawerContent>
          </Drawer>
        </Flex>

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
        <Flex
          bg={'white'}
          w={'15rem'}
          m={4}
          mr={5}
          mb={0}
          className={styles.defaultBoxShadow}
          display={{ base: 'none', md: 'block' }}
        >
          RightBar
        </Flex>
      </Flex>
    </Flex>
  )
}
