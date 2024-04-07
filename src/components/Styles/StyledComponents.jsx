import { styled } from "@mui/material";
import { Link} from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: 1,
  whiteSpace: "nowrap",
});

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #f5f5f5;
  }
`;
