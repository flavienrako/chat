import React from "react";
import { useRecoilValue } from "recoil";
import { currentChat } from "store";

const Avatar = () => {
  const currentRoom = useRecoilValue(currentChat);
  return currentRoom ? (
    <div className="relative inline-block mr-2">
      <img
        className="inline-block object-cover w-20 h-20 rounded-full"
        src={currentRoom?.user.profilePicture}
        alt="Profile image"
      />
      {currentRoom.isActive && (
        <span className="absolute bottom-0 right-0 inline-block w-4 h-4 bg-green-600 border-2 border-white rounded-full"></span>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Avatar;
