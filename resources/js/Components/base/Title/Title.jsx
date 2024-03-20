import {Typography} from "@mui/material";

export default function Title({text}){
    return (
        <Typography variant="h1" style={{fontSize:'2.1rem',fontWeight:'400'}}>
            {text}
        </Typography>
    )
}
