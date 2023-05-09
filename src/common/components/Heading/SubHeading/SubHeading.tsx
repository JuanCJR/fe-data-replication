import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

interface DefaultHeadingProps extends HeadingProps {
  children?: React.ReactNode
}
export const SubHeading = ({ children, ...rest }: DefaultHeadingProps) => {
  return (
    <ChakraHeading
      as={'h3'}
      color={'#14438e'}
      fontSize={'20px'}
      fontWeight={'500'}
      lineHeight={'27px'}
      {...rest}
    >
      {children}
    </ChakraHeading>
  )
}
