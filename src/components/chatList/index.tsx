import React from "react";
import { useRecoilValue } from "recoil";
import { chatList, usersList } from "store";
import List from "./List";
import ClubLogoSvg from "icons/club-logo.svg";

const ChatList: React.FC = () => {
  const chats = useRecoilValue(chatList);
  const users = useRecoilValue(usersList);

  return (
    <>
      <ClubLogoSvg className="w-[120px]" />
      {chats.map((chat) => (
        <List
          {...chat}
          key={chat.id}
          user={users.find(({ id }) => id === chat.withUser)}
        />
      ))}
    </>
  );
};

export default ChatList;
