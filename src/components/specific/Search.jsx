import React, { useState } from "react";
import {
  Dialog,
  Stack,
  DialogTitle,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../Constants/SampleData";
const Search = () => {
  const isLoadingSendFriendRequest = false;
const [users,setUsers] = useState(sampleUsers)
  const addFriendHandler = (id)=>{
    console.log(id)
  }
  const search = useInputValidation("");
  return (
    <Dialog open>
      <Stack direction={"column"} p={"2rem"} width={"23rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
