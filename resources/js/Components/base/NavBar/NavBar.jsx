import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard.js";
import AppsIcon from "@mui/icons-material/Apps.js";
import ShareIcon from "@mui/icons-material/Share.js";
import MessageIcon from "@mui/icons-material/Message.js";
import PeopleIcon from "@mui/icons-material/People.js";
import LeaderboardIcon from "@mui/icons-material/Leaderboard.js";
import SettingsIcon from "@mui/icons-material/Settings.js";

export default function NavBar() {
    return (

        <List
            sx={{ width: '100%',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon></DashboardIcon>
                </ListItemIcon>
                <ListItemText primary="概览" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <AppsIcon></AppsIcon>
                </ListItemIcon>
                <ListItemText primary="应用管理" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShareIcon></ShareIcon>
                </ListItemIcon>
                <ListItemText primary="渠道管理" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <MessageIcon></MessageIcon>
                </ListItemIcon>
                <ListItemText primary="消息推送" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon></PeopleIcon>
                </ListItemIcon>
                <ListItemText primary="用户管理" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LeaderboardIcon></LeaderboardIcon>
                </ListItemIcon>
                <ListItemText primary="安装统计" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon></SettingsIcon>
                </ListItemIcon>
                <ListItemText primary="设置" />
            </ListItemButton>
        </List>
    )

}
