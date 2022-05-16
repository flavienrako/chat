import generateUsers from "data/users";
import generateChats from "data/chats";

import UserInterface from "types/users";
import ChatInterface from "types/chats";
import MessageInterface from "types/messages";
import ChatList from "components/chatList";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { chatList, messagesList, usersList } from "store";
import ChatRoom from "components/ChatRoom";
import Details from "components/details";

interface LandingPageProps {
  users: UserInterface[];
  chats: ChatInterface[];
  messages: MessageInterface[];
}

const LandingPage = ({ users, chats, messages }: LandingPageProps) => {
  const setUsers = useSetRecoilState(usersList);
  const setMessages = useSetRecoilState(messagesList);
  const setChat = useSetRecoilState(chatList);

  useEffect(() => {
    setUsers(users);
    setMessages(messages);
    setChat(chats);
  }, [users, chats, messages]);

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-1/4	 h-full bg-slate-300 p-2">
        <ChatList />
      </div>
      <div className="flex-1 h-full bg-slate-600 overflow-y-auto">
        <ChatRoom />
      </div>
      <div className="w-1/4 h-full bg-slate-900">
        <Details />
      </div>
    </div>
  );
};

export const getServerSideProps = () => {
  // This is only an exemple of how you could pass data from server to client,
  // you may create another page and not use that use
  const users: UserInterface[] = generateUsers();
  const {
    chats,
    messages,
  }: { chats: ChatInterface[]; messages: MessageInterface[] } = generateChats();

  return {
    props: {
      users,
      chats,
      messages,
    },
  };
};

export default LandingPage;
