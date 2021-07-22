import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  Stack,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Service() {
  return (
    <Box p={4} id="section3">
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
          Servicios y Productos
        </Heading>
        <Center>
          <Image boxSize="25vw" src="/servi.png" alt="maquinaria 1" />
        </Center>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#28AAE1", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Área de Producción
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Consultoría y desarrollo de proyectos
              <br />
              Planeación y ejecución de servicios.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#28AAE1", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Área administrativa y operativa
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Elaboración de presupuestos y propuestas con sistemas de
              ingeniería alternativos con miras a mejorar la productividad de
              los recursos.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#28AAE1", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Gerencia de obra
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              De ser necesario consolidación de Alianzas estratégicas con
              empresas constructoras especializadas para ejecución de obras
              nuevas, remodelaciones expansiones.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#28AAE1", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Otros
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Se elaboran diseños y estudios hidráulicos e hidrológicos.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Center>
          <Image boxSize="25vw" src="/servi2.png" alt="maquinaria 1" />
        </Center>
      </Stack>
    </Box>
  );
}
