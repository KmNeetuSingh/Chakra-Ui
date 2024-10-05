import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  Text,
  Stack
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box
        w="100vw" 
        h="100vh" 
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to-r, teal.400, blue.500)" 
      >
        <Card maxW="md" bg="white" shadow="lg" borderRadius="lg" p={6}>
          <CardBody>
            <Stack spacing={4}>
              <Heading as="h1" size="lg" textAlign="center" color="teal.500">
                Welcome to Chakra UI 🎉
              </Heading>
              <Text textAlign="center" color="gray.600">
                Create an awesome UI effortlessly!
              </Text>
              <Input
                placeholder="Enter your name"
                variant="outline"
                focusBorderColor="teal.500"
              />
              <Button
                colorScheme="teal"
                size="md"
                mt={4}
                _hover={{ bg: 'teal.600' }}
              >
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;