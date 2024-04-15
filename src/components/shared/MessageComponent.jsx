import React, { memo } from "react";
import { Typography, Box } from "@mui/material";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sender?._id === user._id ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        padding: "0.5rem",
        borderRadius: "5px",
        width: "fit-content",
      }}
    >
      {sender?._id !== user._id && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download={true}
                style={{
                  color: "black",
                }}
              ><RenderAttachment file={file} url={url}/></a>
            </Box>
          );
        })}
      <Typography color={"gray"} variant="caption">
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
