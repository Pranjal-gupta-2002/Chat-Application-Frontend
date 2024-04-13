import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { StyledLink } from "../Styles/StyledComponents";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat ,
}) => {
    console.log(newMessageAlert)
  return (
    <StyledLink to={`/chat/${_id}`} onContextMenu={(e)=> handleDeleteChat(e,_id,groupChat)} sx={{
        padding:"0"
    }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
        }}
      >
        <AvatarCard avatar={avatar}/>

        <Stack>
            <Typography variant="h6">{name}</Typography>
            
            {
                newMessageAlert && <Typography color={"white"}>{newMessageAlert.count} New Message</Typography>
            }
        </Stack>
        {isOnline && <Box sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "green",
            position: "absolute",
            right: "0",
            transform: "translate(-50%)",
        }}></Box>}
      </div>
    </StyledLink>
  );
};

export default memo(ChatItem);
