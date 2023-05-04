import { useState } from 'react'
import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  CloseButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const Navbar = ({ onOpen }: { onOpen: any }) => (
  <Flex
    as='nav'
    align='center'
    justify='space-between'
    wrap='wrap'
    w='100%'
    mt={4}
    ml={'60'}
    mr={'64'}
    mb={8}
    p={8}
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.800', 'white')}
    boxShadow='lg'
    zIndex='1'
  >
    <Box>
      <Box fontSize='lg' fontWeight='bold'>
        Logo
      </Box>
    </Box>

    {/* SideBar Button */}
    <Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
      <IconButton
        aria-label='Open menu'
        icon={<HamburgerIcon />}
        size='lg'
        variant='ghost'
      />
    </Box>

    {/* Content of navbar */}
    <Box display={{ base: 'none', md: 'block' }} flexBasis='auto' flexGrow='1'>
      <HStack spacing={4}>
        {Links.map((link) => (
          <Box key={link.name}>
            <a href={link.path}>{link.name}</a>
          </Box>
        ))}
      </HStack>
    </Box>
  </Flex>
)

const Sidebar = ({ onClose, isOpen }: { onClose: any; isOpen: any }) => (
  <Box
    bg={useColorModeValue('gray.200', 'gray.900')}
    px={4}
    py={8}
    display={{ base: 'block', md: 'none' }}
    pos='absolute'
    top='0'
    left='0'
    w='100%'
    h='100%'
    overflow='auto'
    zIndex='0'
    transition='.3s ease-in-out'
    transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
  >
    <Box textAlign='right' mb={4}>
      <CloseButton onClick={onClose} />
    </Box>
    <VStack spacing={4} align='stretch'>
      {Links.map((link) => (
        <Box key={link.name}>
          <a href={link.path}>{link.name}</a>
        </Box>
      ))}
    </VStack>
  </Box>
)

const Content = ({ children }: { children: React.ReactNode }) => (
  <Box ml={{ base: 0, md: '250px' }} p={4}>
    {children}
  </Box>
)

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selected, setSelected] = useState(Links[0].name)

  return (
    <Box>
      <Navbar onOpen={onOpen} />
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Content>{children}</Content>
    </Box>
  )
}
