'use client'
import { Flex, Drawer, DrawerContent, CloseButton, Box } from '@chakra-ui/react'
import styles from '../Layout.module.css'
import { DefaulLayoutComponentInterface } from '../interfaces/index.interface'

interface RightBarComponentInterface extends DefaulLayoutComponentInterface {}

export const RightBar = ({
  onOpen,
  onClose,
  isOpen
}: RightBarComponentInterface) => {
  return (
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
  )
}
