import {
    AppBar,
    Box,
    IconButton, List,
    ListItemButton, ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {AccountCircle, ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import {useEffect, useState} from "react";
import NavBar from "@/Components/base/NavBar/NavBar.jsx";



const appBarStyle = {
    height: '50px',
    justifyContent:'center'
}

export default function IndexLayout() {

    const [open,setOpen] = useState(true);

    return (
        <>
            <AppBar style={appBarStyle}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        W2A后台管理系统
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box display="flex" marginTop={appBarStyle.height} gap={1}>
                <Box height={window.innerHeight - 60} width={230}>
                    <NavBar></NavBar>
                </Box>
                <Box style={{backgroundColor:'blue'}} height={window.innerHeight - 60} flexGrow={1}>

                </Box>
            </Box>
        </>
    )
}
