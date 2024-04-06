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
import { VisuallyHiddenInput } from "../components/Styles/StyledComponents";
import {useInputValidation} from "6pp"

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name  = useInputValidation("")
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
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
        {isLogin ? (
          <>
            <Typography varient="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label={"UserName"}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label={"Password"}
                type="password"
                margin="normal"
                variant="outlined"
              />
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
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                SignUp instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography varient="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor:"rgba(0,0,0,0.5)",
                    ":hover":{bgcolor:"rgba(0,0,0,0.7)"}
                  }}
                  component="label"
                >
                  <>
                    <CameraIcon />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label={"Name"}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label={"Bio"}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label={"UserName"}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label={"Password"}
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="text"
                fullWidth
                onClick={toggleLogin}
              >
                Login instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
