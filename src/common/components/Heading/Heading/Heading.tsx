import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

interface DefaultHeadingProps extends HeadingProps {
  children?: React.ReactNode
}
export const Heading = ({ children, ...rest }: DefaultHeadingProps) => {
  return (
    <ChakraHeading
      color={'#14438e'}
      as={'h1'}
      fontSize={'30px'}
      fontWeight={'700'}
      lineHeight={'27px'}
      {...rest}
    >
      {children}
    </ChakraHeading>
  )
}
