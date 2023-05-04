import { useContext, useEffect, useState } from "react";

import {
  Flex,
  FlexProps,
  IconButton,
  useColorModeValue,
  Text,
  HStack,
  Button,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  Box,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown, FiMenu, FiUser } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  toggleColorMode: () => void;
  colorMode: string;
}
export const MobileNav = ({
  onOpen,
  colorMode,
  toggleColorMode,
  ...rest
}: MobileProps) => {
  const [userName, setUserName] = useState("");
  const menuStyles = {
    MenuList: {
      bf: useColorModeValue("white", "gray.900"),
      borderColor: useColorModeValue("gray.200", "gray.700"),
    },
  };

  return (
    <Flex
      ml={{ sm: 0, md: 60, lg: 60, xl: 60 }}
      // ml={'60'}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      // justifyContent={{ base: 'space-between', md: 'flex-end' }}
      boxShadow="md"
      {...rest}
    >
      <Box>
        <IconButton
          display={{ md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
          mr={4}
        />
      </Box>

      {/* <Spacer /> */}
      <Box
      // w="1200px"
      ></Box>

      <HStack spacing={{ base: "0", md: "6" }} ml="auto">
        {/* <SearchInput /> */}
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open-menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack fontWeight="semibold">
                <Avatar size={"sm"} icon={<FiUser />} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems={"flex-start"}
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{userName}</Text>
                  <Text fontSize="xs">{<Reloj />}</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList borderColor={menuStyles.MenuList.borderColor}>
              {/* <MenuItem fontWeight="semibold">Perfil</MenuItem>
              <MenuDivider /> */}
              <MenuItem fontWeight="semibold">Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Reloj = () => {
  let horaActual = new Date();
  const [hora, setHora] = useState(
    `${horaActual.getHours()}:${horaActual.getMinutes()}:${horaActual.getSeconds()}`
  );

  setTimeout(() => {
    let horaActual = new Date();
    setHora(
      `${horaActual.getHours()}:${horaActual.getMinutes()}:${horaActual.getSeconds()}`
    );
  }, 1000);

  return <span>{hora}</span>;
};
