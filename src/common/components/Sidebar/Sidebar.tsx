import {
  Box,
  Collapse,
  Flex,
  UnorderedList,
  VStack,
  useColorModeValue,
  Link as ChakraLink,
  Text,
  Icon,
  Drawer,
  DrawerContent
} from '@chakra-ui/react'
import React from 'react'
import { NavItemProps, SubNavItem } from './NavItem'
import { MobileNav } from './MobileNav'
import { SidebarContent } from './SideBarContent'

export const Sidebar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Box
      minH={'100vh'}

      // bg={useColorModeValue('gray.100', 'gray.900')}
    >
      {/* Sidebar */}
      <SidebarContent display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        placement='left'
        returnFocusOnClose={false}
        size='full'
      >
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      {/* <MobileNav /> */}

      {/* Page Content */}
      <Box
        ml={{ base: 0, md: 60 }}
        // p={location.pathname === "/" ? "0" : "4"}
        //p="4"
      >
        {children}
      </Box>
    </Box>
  )
}

export const CollapseButton = ({
  icon,
  children,
  url,
  onClose,
  items,
  ...rest
}: NavItemProps) => {
  return (
    <>
      <ChakraLink
        //href={url}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        fontWeight='semibold'
      >
        <Flex
          align='center'
          p='4'
          mx='4'
          borderRadius='lg'
          role='group'
          color='white'
          cursor='pointer'
          _hover={{
            bg: 'orange.500',
            color: 'black'
          }}
          {...rest}
        >
          <VStack>
            <Box>
              <Text>
                {icon && (
                  <Icon
                    color='white'
                    mr='4'
                    fontSize='16'
                    _groupHover={{ color: 'black' }}
                    as={icon}
                  />
                )}
                {children}
              </Text>
            </Box>
          </VStack>
        </Flex>
      </ChakraLink>
      <Collapse>
        <UnorderedList
          borderTopWidth={'1px'}
          borderBottomWidth={'1px'}
          borderColor='whiteAlpha.300'
          pt='10px'
          marginRight={'10px'}
          maxH={'70vh'}
          style={{ listStyle: 'none' }}
          // className="scroll"
          overflow='hidden'
        >
          {items?.map((item, index) => (
            // <ListItem>
            //   <Link

            //     _focus={{ boxShadow: 'none' }}
            //     fontWeight="semibold"
            //     style={{ textDecoration: 'none' }}
            //   >
            //     <Flex
            //       align="center"
            //       p="2"
            //       mx="2"
            //       borderRadius="lg"
            //       role="group"
            //       color="white"
            //       cursor="pointer"
            //       _hover={{
            //         bg: 'orange.500',
            //         color: 'black',
            //       }}
            //     >
            <SubNavItem
              key={index}
              icon={item.icon}
              url={item.url}
              onClose={onClose}
            >
              {item.name}
            </SubNavItem>
            //     </Flex>
            //   </Link>
            // </ListItem>
          ))}
        </UnorderedList>
      </Collapse>
    </>
  )
}
