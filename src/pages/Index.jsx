import { Box, VStack, Heading, Text, Image, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="3xl" mx="auto" py={12} px={6}>
        <Image src="https://images.unsplash.com/photo-1585076799833-08afc3d50d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwbWFydGluJTIwdmFuJTIwYnVyZW58ZW58MHx8fHwxNzEzMDYwNzgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portrait of Martin Van Buren" objectFit="cover" w="sm" rounded="lg" shadow="xl" />
        <Heading as="h1" size="2xl">
          Martin Van Buren
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center">
          1782 - 1862
        </Text>
        <Text fontSize="lg">Martin Van Buren was the eighth President of the United States from 1837 to 1841. Before his presidency, he served as the eighth Vice President and the tenth Secretary of State, both under President Andrew Jackson. Van Buren was the first president born after the United States declared independence from Great Britain, making him the first president who was born as a U.S. citizen.</Text>
        <Text fontSize="lg">Van Buren was the first president to have been born a United States citizen. Of Dutch ancestry, he is the only president who spoke English as a second language, and was the first president from New York. As a founder of the Democratic Party, he reassembled the old Jeffersonian coalition by emphasizing his opposition to the national bank, high tariffs, and federal internal improvements.</Text>

        <HStack spacing={8} pt={8}>
          <ChakraLink as={RouterLink} to="/biography" fontWeight="bold" fontSize="lg">
            Biography
          </ChakraLink>
          <ChakraLink href="#" fontWeight="bold" fontSize="lg">
            Presidency
          </ChakraLink>
          <ChakraLink href="#" fontWeight="bold" fontSize="lg">
            Legacy 
          </ChakraLink>
          <ChakraLink href="#" fontWeight="bold" fontSize="lg">
            Gallery
          </ChakraLink>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
