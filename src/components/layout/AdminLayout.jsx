import {
  Close as CloseIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  Groups as GroupsIcon,
  Message as MessageIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tab,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users-management",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats-management",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 0rem 1rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();
  const logOutHandler = () => {};
  return (
    <Stack w={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5">Connects</Typography>
      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <StyledLink
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  color: "gray",
                },
              }
            }
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={"1rem"}
              padding={"1rem"}
            >
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </StyledLink>
        ))}
        <StyledLink onClick={logOutHandler}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            padding={"1rem"}
          >
            {<ExitToAppIcon />}
            <Typography>Logout</Typography>
          </Stack>
        </StyledLink>
      </Stack>
    </Stack>
  );
};
const isAdmin = true;
const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };
  const handleClose = () => {
    setIsMobile(false);
  };
  if (!isAdmin) return <Navigate to={"/admin"} />;
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "#f5f5f5" }}>
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
