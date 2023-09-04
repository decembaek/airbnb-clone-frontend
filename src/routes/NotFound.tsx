import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    //   VStack 수직 | HStack 직선(가로)
    <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
      <Heading>Page Not Found</Heading>
      <Text>It seems that you're lost.</Text>
      <Link to="/">
        <Button colorScheme={"red"} variant={"link"}>
          Go home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}
