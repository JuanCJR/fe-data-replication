'use client'
import {
  Flex,
  Drawer,
  DrawerContent,
  Box,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay
} from '@chakra-ui/react'
import styles from '@components/Layout/Layout.module.css'
import { CustomUseDisclosureProps } from '@/common/types'
import { SideBarList } from './SideBarList'

interface SideBarComponentInterface extends CustomUseDisclosureProps {}

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
      <SideBarList />
      <ForMobileSideBar onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
    </Flex>
  )
}

const ForMobileSideBar = ({
  onOpen,
  onClose,
  isOpen
}: SideBarComponentInterface) => {
  return (
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
  )
}
