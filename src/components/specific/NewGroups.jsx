import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../Constants/SampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroups = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const groupName = useInputValidation("");
  const selectMembersHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };
  console.log(selectedMembers);
  const submitHandler = () => {};
  const closeHandler = () => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"22rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
          variant="outlined"
          fullWidth
          sx={{ mb: "1rem" }}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMembersHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button onClick={submitHandler} variant="contained" size={"large"}>
            Create
          </Button>
          <Button
            onClick={() => {}}
            variant="outlined"
            color="error"
            size={"large"}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
