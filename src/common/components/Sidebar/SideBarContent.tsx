import { LinkItemProps } from "@/common/types/LinkItem";
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { CollapseButton } from "./Sidebar";

interface SidebarProps extends BoxProps {
  onClose?: () => void;
  enabledLinkItems?: LinkItemProps[];
}

export const SidebarContent = ({
  onClose,
  enabledLinkItems,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("orange.600", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("orange.600", "gray.900")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      // boxShadow={location.pathname === "/" ? "" : "dark-lg"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Img src="/img/everycard-white.png" alt="Every Card logo" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {/* {enabledLinkItems.map((link, index) => {
        if (!link.isCollapse) {
          return (
            <NavItem
              key={index}
              icon={link.icon}
              url={link.url}
              onClose={onClose}
            >
              {link.name}
            </NavItem>
          );
        } else {
          return (
            <CollapseButton
              key={index}
              icon={link.icon}
              url={link.url}
              onClose={onClose}
              items={link.collapseList}
            >
              {link.name}
            </CollapseButton>
          );
        }
      })} */}
    </Box>
  );
};
