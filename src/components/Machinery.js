import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  Image,
} from "@chakra-ui/react";
import { GiMineTruck } from "react-icons/gi";

// Replace test data with your own
const features = [
  {
    id: 0,
    title: "Camiones MACK 20 yds³",
  },
  {
    id: 1,
    title: "Tractor CAT D6R",
  },
  {
    id: 2,
    title: "Tractor CAT D6T XL",
  },
  {
    id: 3,
    title: "Tractor CAT D6R XL",
  },
  {
    id: 4,
    title: "Tractor CAT D8R",
  },
  {
    id: 5,
    title: "Tractor CAT D8R serie 2",
  },
  {
    id: 6,
    title: "Motoniveladora CAT 12G",
  },
  {
    id: 7,
    title: "Motoniveladora CAT 12H",
  },
  {
    id: 8,
    title: "Motoniveladora CAT 140M",
  },
  {
    id: 9,
    title: "Rola Piña CAT",
  },
  {
    id: 10,
    title: "Rola tambor liso CAT",
  },
  {
    id: 11,
    title: "Rola CAT 563D Kit Piña",
  },
  {
    id: 12,
    title: "Rola CAT 563D Kit Piña",
  },
  {
    id: 13,
    title: "Camión Cisterna",
  },
  {
    id: 14,
    title: "Compactadora CAT 815F",
  },
  {
    id: 15,
    title: "Camiones Articulado CAT 725",
  },
  {
    id: 16,
    title: "Retro Excavadora CAT 416 E",
  },
  {
    id: 17,
    title: "Excavadora Hidráulica CAT 320 DLME",
  },
  {
    id: 18,
    title: "Excavadora Hidráulica CAT 320 CL",
  },
  {
    id: 19,
    title: "Excavadora Hidráulica CAT 330 CL",
  },
  {
    id: 20,
    title: "Camión Distribuidor de Diésel Peterbilt",
  },
  {
    id: 21,
    title: "Excavadora Hidráulica CAT 320 C Con balde y Martillo",
  },
  {
    id: 22,
    title: "Excavadora Hidráulica CAT 320 DL con Martillo",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4} id="section2">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={"3xl"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "#28AAE1",
            zIndex: -1,
          }}
        >
          Maquinaria
        </Heading>

        <Center>
          <Image boxSize="25vw" src="/car.png" alt="maquinaria 1" />
          <Image boxSize="25vw" src="/car2.png" alt=" maquinaria 2" />
          <Image boxSize="25vw" src="/car3.png" alt=" maquinaria 3" />
        </Center>
        <Text color={"gray.600"} fontSize={"xl"}>
          Contamos con maquinaria especializada para todo tipo de proyectos.
        </Text>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"#28AAE1"} px={2}>
                <GiMineTruck />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
