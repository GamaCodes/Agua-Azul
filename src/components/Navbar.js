import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiOutlineAlignLeft } from "react-icons/ai";

import { BsPersonLinesFill, BsClipboardData, BsPuzzle } from "react-icons/bs";

import { ColorModeSwitcher } from "../ColorModeSwitcher";

export default function Navbar() {
  const bg = useColorModeValue("#ededf2", "#1e1e1f");
  return (
    <Flex p={4} bg={bg}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<AiOutlineAlignLeft />}
          variant="outline"
        ></MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <BsPersonLinesFill />
            <span className="icon-margin">Quienes Somos</span>
          </MenuItem>
          <MenuItem minH="40px">
            <BsPuzzle />
            <span className="icon-margin">Servicios y Productos</span>
          </MenuItem>
          <MenuItem minH="40px">
            <BsClipboardData />
            <span className="icon-margin">Proyectos</span>
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <h1 className="tittle-h1">Agua Azul</h1>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" variant="outline" />
    </Flex>
  );
}
