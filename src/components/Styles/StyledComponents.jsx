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
    background-color: rgba(0,0,0,0.1);
  }
`;

export const InputBox = styled("input")`
width:100%;
height:100%;
border:none;
outline:none;
padding:0 3rem;
border-radius:1.5rem;
background-color:rgba(247,247,247,1);
`;

export const SearchField = styled("input")`
padding:1rem 2rem;
width:25vmax;
border-radius:1.5rem;
background-color:#f1f1f1;
border:none;
outline:none;
font-size:1.1rem;
`;
export const CurveButton = styled("button")`
border-radius:1.5rem;
padding:1rem 2rem;
background-color:black;
border:none;
outline:none;
font-size:1.1rem;
cursor:pointer;
color:white;
&:hover {
  background-color:rgba(0, 0, 0, 0.8);
}
`
