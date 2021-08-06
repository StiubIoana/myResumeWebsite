import React from "react";
import {
  makeStyles,
  AppBar,
  Button,
  Toolbar,
  Typography,
  List,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmailIcon from "@material-ui/icons/Email";
import TemporaryDrawer from "./Drawer";
import "../css/Navbar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    flexGrow: 1,
    position: "fixed",
    width : "100%",
    top: 0,
    zIndex: 999,
  },
  title: {
    flexGrow: 1,
    color: "#00b6b0",
    fontFamily: "Georgia",
    fontSize: "1.5em",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  appbar: {
    backgroundColor: "#ffc0d1",
    boxShadow: "black",
    position: "fixed",
    top: "0",
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

  return (
    <div className={classes.navbar}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ioana Stiubeiu
          </Typography>

          {/* Making it responsive
              If it is a small screen the list wont be displayed */}
          {isMatch ? (
            <TemporaryDrawer />
          ) : (
            <List component="nav" className={classes.list}>
              {buttons.map((value) => (
                <Button
                  style={{ color: "black", marginRight:"5px"}}
                  href={value.ref}
                  key={value.id}
                >
                  {value.icon}
                  {value.title}
                </Button>
              ))}
            </List>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
