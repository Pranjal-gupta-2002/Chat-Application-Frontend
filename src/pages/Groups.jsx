import { useNavigate, useSearchParams } from "react-router-dom";
import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  Grid,
  Stack,
  Tooltip,
  IconButton,
  Box,
  Button,
  Drawer,
  Typography,
  TextField,
  Backdrop,
} from "@mui/material";
import { orange } from "../Constants/color";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Edit as EditIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { StyledLink } from "../components/Styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { chats, sampleUsers } from "../Constants/SampleData";
import UserItem from "../components/shared/UserItem";

const AddMemberDialog = lazy(() =>
  import("../components/dialogs/AddMemberDialog")
);

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialogs/ConfirmDeleteDialog")
);

const isAddMember = false;

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const updateGroupNameHandler = () => {
    setIsEdit(false);
    console.log("group name updated");
  };

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("group deleted");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    console.log("add member");
  };

  const deleteHandler = () => {
    console.log("delete");
  };

  const removeMemberHandler = (id) => {
    console.log(id);
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group name ${chatId}`);
      setGroupNameUpdatedValue(`Group name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const IconBtns = () => (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            color: "white",
            bgcolor: "rgba(0,0,0,0.8)",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.6)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupNameHandler}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );
  const BtnGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}
      >
        Add Members
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        bgcolor={"bisque"}
        height={"100vh"}
      >
        <GroupList myGroups={chats} chatId={chatId} />
      </Grid>
      <Grid
        item
        sm={8}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        <IconBtns />
        {groupName && (
          <>
            {GroupName}

            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Menmbers
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0rem",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
              {sampleUsers.map((i) => (
                <UserItem
                  user={i}
                  isAdded
                  styling={{
                    boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
                  handler={removeMemberHandler}
                  key={i._id}
                />
              ))}
            </Stack>
            {BtnGroup}
          </>
        )}
      </Grid>
      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog />
        </Suspense>
      )}
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"70vw"} myGroups={chats} />
      </Drawer>
    </Grid>
  );
};
const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <StyledLink
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </StyledLink>
  );
});
export default Groups;
