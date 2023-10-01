import { isRouteErrorResponse, Link as RouterLink, useRouteError } from "react-router-dom";
import { Box, Center, Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <Center h="100vh">
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Heading as="h1" size="3xl" marginY={2}>Oops!</Heading>
        <Text fontSize="2xl">
          {isRouteErrorResponse(error) ? "The page does not exist." : "An unexpected error occurred!"}
        </Text>
        <Box marginY={5}>
          <ChakraLink as={RouterLink} to="/">Back to homepage</ChakraLink>
        </Box>
      </Flex>
    </Center>
  );
};

export default ErrorPage;