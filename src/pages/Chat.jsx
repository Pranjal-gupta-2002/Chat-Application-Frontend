import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Stack, IconButton } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/Styles/StyledComponents";
import { orange } from "../Constants/color";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../Constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";
const Chat = () => {
  const containerRef = useRef(null);
  const user = {
    _id:"user._id",
    name:"Abhay"
  }
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        p={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(247,247,247,1)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessage.map((i)=>(
            <MessageComponent message={i} user={user} />
          ))
        }
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"-30deg"
          }} >
            <AttachFileIcon/>
          </IconButton>
          <InputBox placeholder="Type message here..." />
          <IconButton
            type="sumbit"
            sx={{
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                rotate: "-30deg",
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
