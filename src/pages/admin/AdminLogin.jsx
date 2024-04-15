import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
    const secretKey = useInputValidation("");
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Login");
    }
    const isAdmin = true;

    if(isAdmin){
        return <Navigate to={"/admin/dashboard"}/>
    }
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgb(120 32 32 / 50%), rgb(33 31 61 / 50%))",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <>
            <Typography varient="h5">Admin Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={submitHandler}
            >
              <TextField
                required
                fullWidth
                label={"SecretKey"}
                type="password"
                margin="normal"
                variant="outlined"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
              />
              {secretKey.error && (
                <Typography color={"error"} variant="caption">
                  {secretKey.error}
                </Typography>
              )}
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
