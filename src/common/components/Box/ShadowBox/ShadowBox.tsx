import styles from '@styles/styles.module.css'
import { Flex, FlexProps } from '@chakra-ui/react'
interface ShadowBoxProps extends FlexProps {
  children?: React.ReactNode
}

export const ShadowBox = ({ children, ...rest }: ShadowBoxProps) => {
  return (
    <Flex bg={'white'} className={styles.defaultBoxShadow} {...rest}>
      {children}
    </Flex>
  )
}
