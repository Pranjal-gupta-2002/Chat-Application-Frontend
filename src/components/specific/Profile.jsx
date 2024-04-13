import React from "react";
import { Stack,Avatar,Typography } from "@mui/material";
import {Face as FaceIcon,AlternateEmail as UserNameIcon, CalendarMonth as CalenderIcon} from "@mui/icons-material";
import moment from "moment"

const Profile = () => {
  return (
    <Stack direction={'column'} spacing={"2rem"} alignItems={'center'}>
        <Avatar sx={{
            width:"150px",
            height:"150px",
            objectFit:"contain",
            marginBottom:"1rem",
            border:"5px solid white"
        }} />
      <ProfileCard text={"ldiscedfvhbfhvb"} heading={"Bio"}/>
      <ProfileCard text={"Pranjal_gupta_2002"} heading={"UserName"} Icon={<UserNameIcon/>}/>
      <ProfileCard text={"Abhay_gupta"} heading={"Name"} Icon={<FaceIcon/>}/>
      <ProfileCard text={moment('2024-03-12T00:00:00.000Z').fromNow()} heading={"Joined"} Icon={<CalenderIcon/>}/>
    </Stack>
  );
};

const ProfileCard = ({text,Icon,heading}) => {
  return <Stack direction={'row'} alignItems={'center'} textAlign={'center'} spacing={'1rem'} color={'white'} >
    {
        Icon && Icon
    }
    <Stack direction={'column'}>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography color={'gray'} variant={"caption"}>{heading}</Typography>
    </Stack>
  </Stack>;
};

export default Profile;
