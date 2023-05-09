'use client'
import {
  Flex,
  Drawer,
  DrawerContent,
  CloseButton,
  Box,
  VStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  Text
} from '@chakra-ui/react'
import styles from '../Layout.module.css'
import { CustomUseDisclosureProps } from '@/common/types'
import { SubHeading } from '../../Heading'
import { ShadowBox } from '../../Box'

interface RightBarComponentInterface extends CustomUseDisclosureProps {}

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
      <VStack padding={'1rem'} alignItems={'start'} spacing={4}>
        <SubHeading>Estado del Sistema</SubHeading>

        <Box>
          <SubHeading fontSize={'16px'}>Agentes</SubHeading>

          <ShadowBox mt={2}>
            <TableContainer>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>ROBOT</Td>
                    <Td>*DLYW</Td>
                  </Tr>
                  <Tr>
                    <Td>RECEP</Td>
                    <Td>*DLYW</Td>
                  </Tr>
                  <Tr>
                    <Td>RBTREG</Td>
                    <Td>*DLYW</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ShadowBox>
        </Box>

        <VStack alignItems={'start'} spacing={4}>
          <SubHeading fontSize={'16px'}>Consumo</SubHeading>
          <ShadowBox
            mt={2}
            w={'8rem'}
            h={'3rem'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'16px'}
          >
            <SubHeading color={'black'} fontSize={'16px'}>
              CPU
            </SubHeading>
            <SubHeading color={'black'} fontSize={'16px'}>
              20%
            </SubHeading>
          </ShadowBox>

          <ShadowBox
            w={'8rem'}
            h={'3rem'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'16px'}
          >
            <SubHeading color={'black'} fontSize={'16px'}>
              ASP
            </SubHeading>
            <SubHeading color={'black'} fontSize={'16px'}>
              20%
            </SubHeading>
          </ShadowBox>
        </VStack>
      </VStack>
    </Flex>
  )
}
