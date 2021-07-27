import React from 'react';
import { makeStyles, Drawer, List, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
        alignSelf: 'center',
    },
    paper: {
        backgroundColor: '#41b3a3',
    },
    buttonText: {
        fontSize: '1.1em',
        color: 'black',
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    const buttons = [
    {
        title:"Home",
        ref:"#home"
    },

    {
        title:"About",
        ref:"http://www.google.com/"
    },

    {
        title:"Skills",
        ref:"http://www.google.com/"
    },

    {
        title:"Projects",
        ref:"http://www.google.com/"
    },

    {
        title:"Contact",
        ref:"http://www.google.com/"
    },
    ];

    const icons = [<HomeIcon/>, <InfoIcon/>, <FreeBreakfastIcon/>, <AssignmentIcon/>, <EmailIcon/>];

    const list = (anchor) => (
        <div onClick = {toggleDrawer(anchor, false)}>
            <List className = {classes.list}>
                {buttons.map((value, index) => (
                    <Button style={{color: "black"}} href={value.ref}>{icons[index]}{value.title}</Button>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key = "right">
                <Button onClick = {toggleDrawer("right", true)}><MenuIcon/></Button>
                <Drawer classes={{paper: classes.paper}} anchor = "right" open = {state["right"]} onClose = {toggleDrawer("right", false)}>
                    {list("right")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}