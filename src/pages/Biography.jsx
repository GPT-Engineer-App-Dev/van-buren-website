import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Biography = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack spacing={8} maxW="3xl" mx="auto" py={12} px={6}>
        <Heading as="h1" size="2xl">
          Biography of Martin Van Buren
        </Heading>
        
        <Text fontSize="lg">
          Martin Van Buren was born on December 5, 1782, in Kinderhook, New York. He was the first American president to be born a citizen of the United States, as all previous presidents were born before the American Revolution. Van Buren was raised speaking primarily Dutch and learned English at school. His father was a farmer and tavern keeper.
        </Text>

        <Text fontSize="lg">
          Van Buren received a basic education at local schools and briefly studied Latin at the Kinderhook Academy and at Washington Seminary in Claverack. He then began studying law and was admitted to the bar in 1803. Van Buren married Hannah Hoes, his childhood sweetheart, on February 21, 1807. They had four sons together.
        </Text>
        
        <HStack spacing={12}>
          <VStack>
            <Text fontWeight="bold">Born</Text>
            <Text>December 5, 1782</Text>
            <Text>Kinderhook, New York</Text>
          </VStack>
          <VStack>
            <Text fontWeight="bold">Died</Text>
            <Text>July 24, 1862 (aged 79)</Text>
            <Text>Kinderhook, New York</Text>
          </VStack>
        </HStack>
        
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Martin_Van_Buren_edit.jpg/440px-Martin_Van_Buren_edit.jpg"
          alt="Martin Van Buren portrait"
          rounded="md"
          shadow="md"
        />

        <Text fontSize="lg">
          Van Buren had a successful law practice and became increasingly active in politics as a member of the Democratic-Republican Party. He served in the New York State Senate from 1812 to 1820 and was the New York State Attorney General from 1815 to 1819. In 1821, he was elected to the United States Senate.
        </Text>

        <Text fontSize="lg">
          From 1833 to 1837, Van Buren served as the 8th Vice President of the United States under President Andrew Jackson. With Jackson's endorsement, Van Buren was elected as the 8th president in 1836, defeating several Whig opponents. He served from March 4, 1837 to March 4, 1841 but was defeated in his bid for reelection in 1840.
        </Text>

        <Text fontSize="lg">
          After leaving office, Van Buren ran for president again in 1844 and 1848 as a member of the Free Soil Party, opposing the extension of slavery. He died on July 24, 1862 at the age of 79 in his hometown of Kinderhook, New York. Van Buren was the first of a series of eight presidents between Andrew Jackson and Abraham Lincoln who served one term or less.
        </Text>
        
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="lg">
          Back to Home
        </Link>
      </VStack>
    </Box>
  );
};

export default Biography;