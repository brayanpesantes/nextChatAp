import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

import { RiDribbbleLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import ChatRow from "./ChatRow";
import UserAvatar from "./UserAvatar";

const onlineFriends = [
  "Lazar Nikolig",
  "Pedro Nikolig",
  "Juan Nikolig",
  "Liz Nikolig",
  "Marianela Nikolig",
  "Julia Nikolig",
  "Samir Nikolig",
  "Juliana Nikolig",
  "Mirella Nikolig",
];

function ChatHistorySidebar() {
  return (
    <VStack h="full" alignItems="center" w="full" spacing={6}>
      <Flex
        w="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Avatar name="Alexis Nuñez" size="lg">
          <AvatarBadge bg="green.400" boxSize={6} borderWidth={4} />
        </Avatar>
        <VStack>
          <Heading size="md" mt={{ base: 0, lg: 3 }}>
            Alexis Nuñez
          </Heading>
          <HStack px={4} justifyContent="center" spacing={3} mt={4}>
            <IconButton
              icon={<RiDribbbleLine />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Dribbble Account"
            />
            <IconButton
              icon={<RiInstagramLine />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Instagram Account"
            />
            <IconButton
              icon={<RiTwitterLine />}
              variant="ghost"
              rounded="full"
              color="gray.500"
              h={10}
              aria-label="Twitter Account"
            />
          </HStack>
        </VStack>
      </Flex>
      <Box px={8} w="full">
        <Divider color="gray.100" />
      </Box>
      <HStack px={8} w="full" justifyContent="space-between">
        <Heading size="xs">Friends online</Heading>
        <Text fontSize="sm" color="gray.500" fontWeight="semibold">
          23
        </Text>
      </HStack>
      <HStack
        overflow="auto"
        minH={24}
        px={8}
        w="full"
        justifyContent="flex-start"
        spacing={3}
      >
        {onlineFriends.map((friend, index) => (
          <UserAvatar name={friend} key={index} />
        ))}
      </HStack>
      <Box px={2} w="full">
        <Divider color="gray.100" />
      </Box>
      <Box px={8} w="full">
        <Heading size="xs" w="full">
          Chats
        </Heading>
        <Input
          variant="filled"
          mt={2}
          minH={10}
          rounded="full"
          placeholder="Search chat"
        />
      </Box>
      <Box w="full" overflowY="auto">
        <List w="full" spacing={0}>
          <ListItem>
            <ChatRow />
            <ChatRow />
            <ChatRow />
            <ChatRow />
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
}

export default ChatHistorySidebar;
