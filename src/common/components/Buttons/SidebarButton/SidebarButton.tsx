import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, IconButton, UseDisclosureProps } from '@chakra-ui/react'

export const SideBarButton = ({
  onOpen,
  onClose,
  isOpen
}: UseDisclosureProps) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} ml={4} mr={2}>
      <IconButton
        aria-label='Open menu'
        icon={<HamburgerIcon />}
        size='md'
        variant='ghost'
        onClick={isOpen ? onClose : onOpen}
      />
    </Box>
  )
}
