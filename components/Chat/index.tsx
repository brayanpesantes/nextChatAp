import {
  Flex,
  HStack,
  IconButton,
  Input,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import ChatDubble from "./ChatDubble";
import { IoMdSend } from "react-icons/io";
import { HiChat, HiDocument } from "react-icons/hi";
const messages = [
  {
    message: "hey  asdn asdsa asd",
    dateSent: "20:21",
    from: "others",
  },
  {
    message: "hey  asdn asdsa asd",
    from: "me",
    dateSent: "20:21",
  },
  {
    message: "hey  asdn asdsa asd",
    from: "others",
    dateSent: "18:21",
  },
  {
    message: "hey  asdn asdsa asd",
    from: "others",
    dateSent: "10:21",
  },
  {
    message: "hey  asdn asdsa asd",
    from: "others",
    dateSent: "01:21",
  },
];

type Props = {
  onChatHistoryOpen: () => void;
  onChatFilesOpen: () => void;
};
const Chat = ({ onChatHistoryOpen, onChatFilesOpen }: Props) => {
  return (
    <Flex w="full" flexDirection="column">
      <HStack px={4} py={4} borderBottomColor="gray.100" borderBottomWidth={1}>
        <IconButton
          onClick={onChatHistoryOpen}
          display={{ base: "inherit", lg: "none" }}
          icon={<HiChat />}
          aria-label="Toggle Chat History Drawer"
        />
        <Input variant="filled" rounded="full" placeholder="Search Friends" />
        <IconButton
          onClick={onChatFilesOpen}
          display={{ base: "inherit", lg: "none" }}
          icon={<HiDocument />}
          aria-label="Toggle Chat Files Drawer"
        />
      </HStack>
      <Flex px={6} overflowY="auto" flexDirection="column" flex={1}>
        <Stat mt={6}>
          <StatLabel color="gray.500">Chatting with</StatLabel>
          <StatNumber>Dina haarison</StatNumber>
        </Stat>
        {messages.map(({ message, dateSent, from }, index) => (
          <ChatDubble
            message={message}
            dateSent={dateSent}
            from={from}
            key={index}
          />
        ))}
      </Flex>
      <Flex pl={4} pr={2} py={2} borderTopColor="gray.100" borderTopWidth={1}>
        <Input variant="unstyled" placeholder="Type your Message" />
        <IconButton
          colorScheme="blue"
          aria-label="Send Message"
          variant="ghost"
          icon={<IoMdSend />}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
