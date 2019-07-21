import React ,{useState} from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UserProfile from './UserProfile'
import { Home } from 'styled-icons/fa-solid/Home';
import { AddCircle } from 'styled-icons/material/AddCircle'
import { UserDetail } from 'styled-icons/boxicons-solid/UserDetail'
import { LogOut } from 'styled-icons/boxicons-regular/LogOut'
import AddForm from './AddForm';
import UserTable from '../tables/UserTable';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
            color: 'white',
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,

        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export default
    function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

        // Data
       
        return (
            <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    style={{
                        background: 'rgb(2,0,36)',
                        background: 'linear-gradient(79deg, rgba(2,0,36,1) 1%, rgba(4,189,204,1) 17%, rgba(5,170,87,1) 49%)'
                    }}
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color='secondary'
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Password Manager
          </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <br /><br /><br /><br />
                    <List style={{ backgroundColor: 'black', borderRadius: '25px', color: 'white' }}>
                        <ListItem button component="a" href="/profile" key={"Home"}>
                            <ListItemIcon > <Home size="40" color="rgba(5,170,87,1)" /></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button component="a" href="/add" key={"Add"}>
                            <ListItemIcon> <AddCircle size="40" color="rgba(5,170,87,1)" /></ListItemIcon>
                            <ListItemText primary={"Add New "} />
                        </ListItem>
                        <ListItem button component="a" href="/edit" key={"Profile"}>
                            <ListItemIcon> <UserDetail size="40" color="rgba(5,170,87,1)" /></ListItemIcon>
                            <ListItemText primary={"Profile"} />
                        </ListItem>
                        <ListItem button component="a" href="/logout" key={"LogOut"}>
                            <ListItemIcon> <LogOut size="40" color="rgba(5,170,87,1)" /></ListItemIcon>
                            <ListItemText primary={"Log Out"} />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                   
                </main>
            </div>
            </div>
        );
    }

