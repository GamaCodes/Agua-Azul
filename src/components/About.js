import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Center,
  Image,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box p={4}>
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
          Quienes Somos
        </Heading>

        <Box p={5} shadow="xl" borderWidth="3px">
          <Text mt={4}>
            Somos una empresa dedicada al ramo de la construcción ofreciendo sus
            servicios especializados en obras de infraestructuras tales como
            carreteras, sistemas de drenajes pluviales, sanitarios, movimientos
            de tierra, construcción de acueductos, puentes, pavimentación de
            hormigón y asfalto. Productos de nuestra experiencia ofrecemos los
            servicios de diseño planeación y construcción, administración y
            operación de proyectos de todas aquellas personas, grupos o
            instituciones que involucran dichos campos de atención y servicio.
          </Text>
        </Box>
        <Center>
          <Image boxSize="25vw" src="/somo.jpg" alt="maquinaria 1" />
        </Center>
        <Box p={5} shadow="xl" borderWidth="3px">
          <Text mt={4}>
            AGUA AZUL, ofrece el apoyo de un grupo de profesionales con amplia
            experiencia y nivel de formación académica en diversas disciplinas,
            cuyo desempeño en organizaciones del sector Público y Privado avala
            satisfactoriamente su sólida experiencia. De igual forma, garantiza
            el adecuado manejo y control de asuntos confidenciales; lo que
            aunado a su integración como empresa del sector construcción,
            permite generar una suma de efectos útiles a manera de valor
            agregado en las tareas que desempeña.{" "}
          </Text>
        </Box>
        <Center>
          <Image boxSize="25vw" src="/somo2.jpg" alt="maquinaria 1" />
        </Center>
        <Box p={5} shadow="xl" borderWidth="3px">
          <Text mt={4}>
            Por su calidad y precio AGUA AZUL, se rige como una de las empresas
            con la mayor posibilidad de generar ventajas competitivas para sus
            clientes. Todos nuestros proyectos tienen la cobertura de empresas
            aseguradoras reconocidas a nivel nacional e internacional.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
