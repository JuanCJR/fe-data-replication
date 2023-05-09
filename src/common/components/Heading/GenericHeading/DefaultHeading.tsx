import { Heading, HeadingProps } from '@chakra-ui/react'

interface DefaultHeadingProps extends HeadingProps {
  children?: React.ReactNode
}
export const GenericHeading = ({ children, ...rest }: DefaultHeadingProps) => {
  return <Heading {...rest}>{children}</Heading>
}
