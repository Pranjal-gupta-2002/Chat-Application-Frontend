import {
  Dialog,
  DialogTitle,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

const NewGroups = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>New Group</DialogTitle>
        {sampleNotification.length > 0 ? (
          sampleNotification.map((item, index) => (
            <NotificationItem
              key={index}
              sender={item.sender}
              _id={item._id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
