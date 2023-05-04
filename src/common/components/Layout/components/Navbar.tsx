import { Box, Flex, Heading, IconButton } from '@chakra-ui/react'
import styles from '../Layout.module.css'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import logo from '@assets/logo.png'
import { DefaulLayoutComponentInterface } from '../interfaces/index.interface'

interface NavBarComponentInterface extends DefaulLayoutComponentInterface {}

export const NavBarComponent = ({
  onOpen,
  onClose,
  isOpen
}: NavBarComponentInterface) => {
  return (
    <Flex
      bg={'white'}
      h='50px'
      m={4}
      mr={4}
      mb={0}
      alignItems={'center'}
      className={styles.defaultBoxShadow}
    >
      {/* SideBar Button */}
      <Box display={{ base: 'block', md: 'none' }} ml={4} mr={2}>
        <IconButton
          aria-label='Open menu'
          icon={<HamburgerIcon />}
          size='md'
          variant='ghost'
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
      <Flex ml={{ base: '4', md: 'none' }} h={'100%'} alignItems={'center'}>
        <Image src={logo} alt='data replication logo' width={30} height={40} />
        <Heading ml={1} fontSize={'md'} as={'h1'} fontWeight={'semibold'}>
          Online Data Replication
        </Heading>
      </Flex>
    </Flex>
  )
}
