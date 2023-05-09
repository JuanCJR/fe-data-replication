import styles from '@components/Layout/Layout.module.css'
import { SidebarOptionsList } from '@/common/utils/contants/SidebarOptionsList'
import { Box, Flex, Icon } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export const SideBarList = () => {
  return (
    <Flex className={styles.sidebarListContainer}>
      <Box className={styles.sidebarList}>
        {SidebarOptionsList.map((value, index) => (
          <Link key={index} href={value.url}>
            <Box>
              <Icon as={value.icon} fontSize={'16'} />
              <Box>{value.name}</Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Flex>
  )
}
