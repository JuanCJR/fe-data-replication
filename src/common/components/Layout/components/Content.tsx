'use client'
import { Flex } from '@chakra-ui/react'

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex w={'100%'} mt={4} p={'1rem'} borderRadius={6}>
      {children}
    </Flex>
  )
}
