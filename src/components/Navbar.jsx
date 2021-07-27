import React from 'react';
import { makeStyles, AppBar, Button, Toolbar, Typography, List, useTheme, useMediaQuery } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmailIcon from '@material-ui/icons/Email';
import TemporaryDrawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position:"static"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white',
      fontFamily: 'Georgia',
      fontSize: '1.5em',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    appbar: {
        backgroundColor: '#c38d9e',
        boxShadow: 'black',
        position: 'fixed',
        top: '0'
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const buttons = [
        {
            title:"Home",
            ref:"#home",
        },
    
        {
            title:"About",
            ref:"http://www.google.com/",
        },
    
        {
            title:"Skills",
            ref:"http://www.google.com/",
        },
    
        {
            title:"Projects",
            ref:"http://www.google.com/",
        },
    
        {
            title:"Contact",
            ref:"http://www.google.com/",
        },
    ];

    const icons = [<HomeIcon/>, <InfoIcon/>, <FreeBreakfastIcon/>, <AssignmentIcon/>, <EmailIcon/>];

    return (
        <div className={classes.root} >
            <AppBar className={classes.appbar}>   
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Ioana Stiubeiu
                    </Typography>

                    {/* Making it responsive
                        If it is a small screen the list wont be displayed */}
                    {isMatch ? 
                        (<TemporaryDrawer/>) :
                        (<List component="nav" className={classes.list}>
                            {buttons.map((value, index) => (
                                <Button style={{color: "black"}} href={value.ref}>{icons[index]}{value.title}</Button>
                            ))}
                        </List>)
                    }
                
                </Toolbar> 
            </AppBar> 
        </div>
    );
}

