import { IconType } from "react-icons";
import React, { useContext } from "react";
import {
  Flex,
  FlexProps,
  Icon,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { LinkItemProps } from "@/common/types/LinkItem";

//context
export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: any;
  url: string;
  items?: LinkItemProps[];
  onClose: () => void;
}

export const NavItem = ({
  icon,
  children,
  url,
  onClose,
  ...rest
}: NavItemProps) => {
  return (
    <ChakraLink
      href={url}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      fontWeight="semibold"
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        color="white"
        cursor="pointer"
        _hover={{
          bg: "orange.500",
          color: "black",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            color="white"
            mr="4"
            fontSize="16"
            _groupHover={{ color: "black" }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakraLink>
  );
};

export const SubNavItem = ({
  icon,
  children,
  url,
  onClose,
  ...rest
}: NavItemProps) => {
  return (
    <ChakraLink
      href={url}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      fontWeight="semibold"
    >
      <Flex
        mb={3}
        align="center"
        // p="4"
        //mx="4"
        borderRadius="lg"
        role="group"
        color="white"
        cursor="pointer"
        _hover={{
          bg: "orange.500",
          color: "black",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            color="white"
            mr="4"
            ml={"6"}
            fontSize="13"
            _groupHover={{ color: "black" }}
            as={icon}
          />
        )}
        <Text fontSize="14">{children}</Text>
      </Flex>
    </ChakraLink>
  );
};
