import { Box, Flex, Textarea, VStack, Text, Heading } from "@chakra-ui/react";
import { FaBook, FaBrain, FaCode, FaGithub, FaPencilAlt } from "react-icons/fa";

const Index = () => {
  const sections = [
    { icon: FaBrain, title: "AI Reliable" },
    { icon: FaCode, title: "Frontend Generation" },
    { icon: FaGithub, title: "GitHub Integration" },
    { icon: FaPencilAlt, title: "Content Editing" },
    { icon: FaBook, title: "Documentation" },
  ];

  return (
    <Flex height="100vh">
      <VStack width="250px" padding="20px" bg="gray.100" alignItems="flex-start" spacing={4}>
        <Heading size="md" mb={6}>
          Sections
        </Heading>
        {sections.map((section, index) => (
          <Flex key={index} align="center" width="100%">
            <Box as={section.icon} mr={2} />
            <Text fontWeight="medium">{section.title}</Text>
          </Flex>
        ))}
      </VStack>
      <Box flex="1" p={10}>
        <Textarea placeholder="Start typing here..." minHeight="90vh" defaultValue="This is a simple note-taking app. Use the sidebar to navigate between different sections." />
      </Box>
    </Flex>
  );
};

export default Index;
