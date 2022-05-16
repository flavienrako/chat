import moment from "moment";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { currentChat } from "store";
import { Message, MyMessage } from "./Message";

// TODO rondomize message id
const ChatRoom = () => {
  const [currentRoom, postMessage] = useRecoilState(currentChat);
  const [message, setMessage] = useState<string>(undefined);

  const handleAddMessage = (event: any) => {
    event.preventDefault();
    setMessage("");

    postMessage((room) => ({
      ...room,
      messages: [
        ...room.messages,
        {
          chatId: currentRoom.id,
          id: "",
          writtenByMe: true,
          content: message,
          date: moment().format(),
        },
      ],
    }));
  };

  return (
    <div className="flex flex-col h-full  p-4">
      <div></div>
      <div className="flex-1 flex justify-end flex-col">
        {currentRoom?.messages.map(({ content, id, writtenByMe }) =>
          writtenByMe ? (
            <MyMessage
              message={content}
              key={id}
              avatar="https://minio.billers.io/billers/app_v2/Me_25ff08b932.png"
            />
          ) : (
            <Message
              message={content}
              key={id}
              avatar={currentRoom.user.profilePicture}
            />
          )
        )}
      </div>
      <form className="py-4" onSubmit={handleAddMessage}>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Your message"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.currentTarget.value)
          }
          value={message}
        />
      </form>
    </div>
  );
};

export default ChatRoom;
