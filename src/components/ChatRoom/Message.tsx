import React from "react";

type MessageProps = {
  message: string;
  avatar: string;
};

export const MyMessage: React.FC<MessageProps> = ({ message, avatar }) => {
  return (
    <div className="my-2">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
              {message}
            </span>
          </div>
        </div>
        <img
          src={avatar}
          alt="My profile"
          className="w-6 h-6 rounded-full order-2"
        />
      </div>
    </div>
  );
};

export const Message: React.FC<MessageProps> = ({ message, avatar }) => {
  return (
    <div className="my-2">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
              {message}
            </span>
          </div>
        </div>
        <img
          src={avatar}
          alt="User My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      </div>
    </div>
  );
};
