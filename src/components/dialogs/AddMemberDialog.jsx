import React, { useState } from "react";
import {
  Dialog,
  Stack,
  DialogTitle,
  Typography,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";
import { sampleUsers } from "../../Constants/SampleData";
import UserItem from "../shared/UserItem";
const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const selectMembersHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };
  
  const addMemberSubmitHandler = () => {
    console.log(chatId);
  };
  const closeHandler = () => {
    setMembers([])
    setSelectedMembers([])
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem user={i} handler={selectMembersHandler} isAdded={selectedMembers.includes(i._id)}/>
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isLoadingAddMember}
            onClick={addMemberSubmitHandler}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
