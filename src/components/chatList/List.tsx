import React, { useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentChat, messagesList, usersList } from "store";
import ChatInterface from "types/chats";
import UserInterface from "types/users";

const List: React.FC<ChatInterface & { user: UserInterface }> = (props) => {
  const { id, withUser, isActive, user, ...chat } = props;

  const [current, setCurrentChat] = useRecoilState(currentChat);
  const messages = useRecoilValue(messagesList);
  const users = useRecoilValue(usersList);

  const lastMessage = useMemo(
    () => messages.find(({ id }) => id === chat.lastMessage)?.content,
    [chat.lastMessage, messages]
  );

  const destinataire = useMemo(
    () => users.find(({ id }) => id === withUser),
    [withUser, users]
  );

  const messagesInRoom = useMemo(
    () =>
      messages
        .filter(({ chatId }) => id === chatId)
        .sort((a, b) => {
          return +new Date(b.date) - +new Date(a.date);
        }),
    [withUser, users]
  );

  const handleSelectMessage = () => {
    setCurrentChat({
      id,
      isActive,
      user,
      messages: messagesInRoom,
      withUser: destinataire,
    });
  };

  return (
    <div
      className={`flex items-center p-2  my-2 cursor-pointer ${
        current?.id === id ? "bg-gray-300	rounded-lg" : ""
      }`}
      onClick={handleSelectMessage}>
      <div className="relative inline-block mr-2">
        <img
          className="inline-block object-cover w-12 h-12 rounded-full"
          src={user.profilePicture}
          alt="Profile image"
        />
        {isActive && (
          <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
        )}
      </div>
      <div className="w-3/4">
        <h3>{user.name}</h3>
        <p className="truncate ...">{lastMessage}</p>
      </div>
    </div>
  );
};

export default List;
