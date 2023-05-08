'use client'
import { Flex } from '@chakra-ui/react'

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      // bg={'blackAlpha.600'}
      w='100%'
      mt={4}
      padding={'1rem'}
      // className={styles.defaultBoxShadow}
    >
      {children}
    </Flex>
  )
}
