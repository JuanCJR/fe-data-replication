'use client'
import { ShadowBox } from '@/common/components/Box'
import { SubHeading } from '@/common/components/Heading'
import {
  Table,
  Thead,
  Tr,
  Th,
  VStack,
  TableContainer,
  Tbody,
  Td,
  Button
} from '@chakra-ui/react'

export const ServiceCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShadowBox
      bg={'white'}
      h={'14rem'}
      w={'100%'}
      borderRadius={'16px'}
      padding={4}
    >
      <VStack align='stretch' w={'100%'} spacing={4}>
        <SubHeading>{children}</SubHeading>
        <TableContainer>
          <Table size={'sm'}>
            <Thead>
              <Tr>
                <Th>Data Group</Th>
                <Th>File</Th>
                <Th>Origen</Th>
                <Th>Destino</Th>
                <Th>Estado</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>DTGIBR</Td>
                <Td>ACMST</Td>
                <Td>134</Td>
                <Td>134</Td>
                <Td>
                  <Button colorScheme='red' size={'lg'} h={'6'}></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>DTGIBR</Td>
                <Td>ACMST</Td>
                <Td>134</Td>
                <Td>134</Td>
                <Td>
                  <Button colorScheme='green' size={'lg'} h={'6'}></Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </ShadowBox>
  )
}
