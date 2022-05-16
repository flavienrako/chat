import React from "react";
import ChatInterface from "types/chats";

interface ChatProps {
  chats: ChatInterface[];
}
const Chat: React.FC<ChatProps> = (props) => {
  const { chats } = props;

  return <div></div>;
};

export default Chat;
