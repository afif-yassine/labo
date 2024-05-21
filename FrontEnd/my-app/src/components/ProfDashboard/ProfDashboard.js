import React, { useState } from 'react';
import {
    Box,
    CssBaseline,
    Drawer,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Collapse,
    Button
} from '@mui/material';
import {
    AddSharp,
    Article,
    CalendarViewDaySharp,
    ExitToApp,
    ExpandLess,
    ExpandMore,
    LibraryBooks, SwapHoriz
} from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import PublishIcon from '@mui/icons-material/Publish';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';
import Articles from './Articles/Articles';
import Chat from "./Chat/Chat";
import ChangeTeam from "./ChangeTeamRequest/ChangeTeam";
import Actualite from "../Home/Actualite";

// Import notification sub-components
import DoctorantSignUpRequests from './NotificationProf/DoctorantSignUpRequests';
import ProfileProfSettings from "./ProfileProfSettings/ProfileProfSettings";
import HandleLogout from "../login/Logout";
import AllArticle from "./Articles/AllArticle";
import ArticleDisplay from "./Articles/ArticleDisplay";


const drawerWidth = 240;

const ProfDashboard = () => {
    const [open, setOpen] = useState(false);
    const [articlesOpen, setArticlesOpen] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleClick = (menu) => {
        if (menu === 'notifications') {
            setOpen(!open);
        } else if (menu === 'articles') {
            setArticlesOpen(!articlesOpen);
        }
    };

    const handleMenuItemClick = (componentName) => {
        setSelectedComponent(componentName);
    };

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Discussion':
                return <Chat/>;
            case 'Annoncement':
                return <Actualite/>;
            case 'ProfileSettings':
                return <ProfileProfSettings />;
            case 'ChangeTeam':
                return <ChangeTeam/>;
            case 'DoctorantSignUpRequests':
                return <DoctorantSignUpRequests />;
            case 'CreateArticle':
                return <Articles/>;
            case 'AllArticles':
                return <AllArticle/>;
            case 'MyArticles':
                return <ArticleDisplay/>;
            case 'Logout':
                return <HandleLogout/>;
            default:
                return <Typography variant="body2">Please select an item from the menu.</Typography>;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {/* Existing Menu Items */}
                            <ListItem button onClick={() => handleClick('notifications')}>
                                <ListItemIcon><NotificationsIcon /></ListItemIcon>
                                <ListItemText primary="Notifications" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button sx={{ pl: 4 }} onClick={() => handleMenuItemClick('DoctorantSignUpRequests')}>
                                        <ListItemText primary="Doctorant Sign-up Requests" />
                                    </ListItem>
                                </List>
                            </Collapse>

                            {/* Other Main Menu Items */}
                            <ListItem button onClick={() => handleMenuItemClick('Discussion')}>
                                <ListItemIcon><ForumIcon /></ListItemIcon>
                                <ListItemText primary="Discussion" />
                            </ListItem>
                            <ListItem button onClick={() => handleMenuItemClick('ProfileSettings')}>
                                <ListItemIcon><SettingsIcon /></ListItemIcon>
                                <ListItemText primary="Profile Settings" />
                            </ListItem>
                            <ListItem button onClick={() => handleMenuItemClick('ChangeTeam')}>
                                <ListItemIcon><SwapHoriz /></ListItemIcon>
                                <ListItemText primary="Request Change Team" />
                            </ListItem>
                            <ListItem button onClick={() => handleMenuItemClick('Annoncement')}>
                                <ListItemIcon><PublishIcon /></ListItemIcon>
                                <ListItemText primary="Annoncement" />
                            </ListItem>

                            {/* Articles Menu Item */}
                            <ListItem button onClick={() => handleClick('articles')}>
                                <ListItemIcon><LibraryBooks /></ListItemIcon>
                                <ListItemText primary="Articles" />
                                {articlesOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={articlesOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button sx={{ pl: 4 }} onClick={() => handleMenuItemClick('CreateArticle')}>
                                        <ListItemIcon><AddSharp /></ListItemIcon>
                                        <ListItemText primary="Nouveau Article" />
                                    </ListItem>
                                    <ListItem button sx={{ pl: 4 }} onClick={() => handleMenuItemClick('AllArticles')}>
                                        <ListItemIcon><CalendarViewDaySharp /></ListItemIcon>
                                        <ListItemText primary="Articles" />
                                    </ListItem>
                                    <ListItem button sx={{ pl: 4 }} onClick={() => handleMenuItemClick('MyArticles')}>
                                        <ListItemIcon><Article /></ListItemIcon>
                                        <ListItemText primary="Mes Articles" />
                                    </ListItem>
                                </List>
                            </Collapse>
                            <ListItem>
                                <Button
                                    fullWidth
                                    startIcon={<ExitToApp />}
                                    onClick={() => handleMenuItemClick('Logout')}
                                    sx={{ color: 'white', backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' } }}
                                >
                                    Log Out
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        bgcolor: 'background.default',
                        p: 3,
                    }}
                >
                    <Toolbar />
                    {renderComponent()}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default ProfDashboard;