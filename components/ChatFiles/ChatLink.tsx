import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

const ChatLink = () => {
  return (
    <HStack w="full" px={8} spacing={3}>
      <Box w={14} h={12} rounded="lg" bg="gray.100" />
      <VStack spacing={0} alignItems="flex-start" w="full">
        <Heading fontSize={12} size="sm">
          Dribble.com
        </Heading>
        <Text fontSize={12} color="gray.400">
          11:43
        </Text>
      </VStack>
      <Text fontSize={12} color="gray.400">
        10.03.2021
      </Text>
    </HStack>
  );
};

export default ChatLink;
