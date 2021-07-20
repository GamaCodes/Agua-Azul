import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Service from "../../components/Service";
import Machinery from "../../components/Machinery";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const bg = useColorModeValue("white", "#282829");
  return (
    <Box bg={bg}>
      <Hero />
      <About />
      <Machinery />
      <Service />
    </Box>
  );
}
