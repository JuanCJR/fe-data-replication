'use client'
import {
  Flex,
  Drawer,
  DrawerContent,
  CloseButton,
  Box,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay
} from '@chakra-ui/react'
import styles from '../Layout.module.css'
import { DefaulLayoutComponentInterface } from '../interfaces/index.interface'

interface SideBarComponentInterface extends DefaulLayoutComponentInterface {}

export const SideBar = ({
  onOpen,
  onClose,
  isOpen
}: SideBarComponentInterface) => {
  return (
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
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box bg={'white'} w={{ base: 'full', md: 60 }} pos='fixed' h='full'>
              <Flex
                h='20'
                alignItems='center'
                mx='8'
                justifyContent='space-between'
              >
                <DrawerCloseButton />
              </Flex>
              sidebar from drawer
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
