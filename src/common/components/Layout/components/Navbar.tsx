'use client'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  UseDisclosureProps
} from '@chakra-ui/react'
import styles from '../Layout.module.css'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import logo from '@assets/logo.png'
import { ShadowBox } from '@components/Box/ShadowBox/ShadowBox'
import { SideBarButton } from '@components/Buttons/index'
import { GenericHeading } from '@/common/components/Heading'
import { CustomUseDisclosureProps } from '@/common/types'

interface NavBarComponentProps extends CustomUseDisclosureProps {}

export const NavBarComponent = ({
  onOpen,
  onClose,
  isOpen
}: NavBarComponentProps) => {
  return (
    <ShadowBox h='50px' m={4} mr={4} mb={0} alignItems={'center'}>
      {/* SideBar Button */}
      <SideBarButton onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <Flex ml={{ base: '4', md: 'none' }} h={'100%'} alignItems={'center'}>
        <Image src={logo} alt='data replication logo' width={30} height={40} />
        <GenericHeading
          ml={1}
          fontSize={'md'}
          as={'h1'}
          fontWeight={'semibold'}
        >
          Online Data Replication
        </GenericHeading>
      </Flex>
    </ShadowBox>
  )
}
