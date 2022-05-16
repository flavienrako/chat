import { atom } from "recoil";
import ChatInterface from "types/chats";
import MessageInterface from "types/messages";
import UserInterface from "types/users";

interface ChatRoom {
  id: string;
  isActive?: boolean;
  messages: MessageInterface[];
  user: UserInterface;
  withUser: UserInterface;
}

export const usersList = atom<UserInterface[]>({
  key: "users-list",
  default: [],
});

export const messagesList = atom<MessageInterface[]>({
  key: "messages-list",
  default: [],
});

export const chatList = atom<ChatInterface[]>({
  key: "chat-list",
  default: [],
});

export const currentChat = atom<ChatRoom>({
  key: "current-message",
  default: undefined,
});
