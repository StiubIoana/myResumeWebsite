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
        alignSelf: 'center'
    },
    paper: {
        backgroundColor: '#a6e9d7',
    },
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
        ref:"#home",
        icon: <HomeIcon/>,
        id: 1
    },

    {
        title:"About",
        ref:"http://www.google.com/",
        icon: <InfoIcon/>,
        id: 2
    },

    {
        title:"Skills",
        ref:"http://www.google.com/",
        icon: <FreeBreakfastIcon/>,
        id: 3
    },

    {
        title:"Projects",
        ref:"http://www.google.com/",
        icon: <AssignmentIcon/>,
        id: 4
    },

    {
        title:"Contact",
        ref:"http://www.google.com/",
        icon: <EmailIcon/>,
        id: 5
    }
];

    const list = (anchor) => (
        <div onClick = {toggleDrawer(anchor, false)}>
            <List className = {classes.list}>
                {buttons.map((value) => (
                    <Button style={{color: "black", marginTop:"5px", marginBottom:"10px", fontSize: "1em"}} href={value.ref} key={value.id}>{value.icon}{value.title}</Button>
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