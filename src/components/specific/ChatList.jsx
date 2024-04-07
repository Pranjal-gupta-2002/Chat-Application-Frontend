import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
    console.log(chatId)
    console.log(newMessagesAlert);
  return (
    <Stack width={w} direction={"column"}>
      {chats.map((data,index) => {
        const { avatar, name, _id, groupChat, members } = data;
        // console.log(data._id);

        const newMessageAlert = newMessagesAlert.find(
          (message) => message.chatId === _id
        );
        console.log(newMessageAlert);
        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItem
          index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
