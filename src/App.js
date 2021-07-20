import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
