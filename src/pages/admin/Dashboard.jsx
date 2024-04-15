import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/Styles/StyledComponents";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0rem",
        borderRadius: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon
          sx={{
            fontSize: "3rem",
          }}
        />
        <SearchField placeholder="Serach..." />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1}></Box>
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("MMMM Do YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );
  const Widgets = <>yewfyqew</>;
  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}
        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography variant="h4" margin={"2rem 0"}>
              Last Messages
            </Typography>
            {"Chat"}
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              width: {
                xs: "100%",
                lg: "50%",
              },
              alignItems: "center",
              width: "100%",
              maxWidth: "25rem",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {"Donut Chart"}
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
