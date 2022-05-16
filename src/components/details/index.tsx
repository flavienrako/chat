import Avatar from "components/Avatar";
import React from "react";
import { useRecoilValue } from "recoil";
import { currentChat } from "store";

const Details: React.FC = () => {
  const currentRoom = useRecoilValue(currentChat);

  return (
    <div className="flex  flex-col p-8 items-center">
      {currentRoom && <Avatar />}
      <form className="py-4">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Search a message"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => ""}
        />
      </form>
    </div>
  );
};

export default Details;
