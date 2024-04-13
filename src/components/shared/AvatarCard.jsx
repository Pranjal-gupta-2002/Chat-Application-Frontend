import React from 'react'
import { Stack,Box,AvatarGroup ,Avatar} from '@mui/material'

const AvatarCard = ({avatar=[],max=4}) => {
  return (
    <Stack direction={'row'} spacing={0.5}>
        <AvatarGroup max={max}>
            <Box width={"5rem"} height={"5rem"}>
                {avatar.map((src,index)=>(
                    <Avatar key={index} src={src} sx={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        position:"absolute",
                        left:{
                            xs:`${0.5+index}rem`,
                            sm:`${index}rem`
                        },
                        transform: "translate(50%,50%)"
                    }} alt="" />
                ))}
            </Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard