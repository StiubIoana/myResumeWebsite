import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SlidingTextBoxes from './SlidingTextBoxes'

const useStyles = makeStyles((theme) => ({
    responsiveImg: {
        position: "relative",
        maxWidth: "100%",
    },
    responsiveImg_img: {
        position: "relative",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        heigth: "100%"
    }
}));

export default function ResponsiveDiv(props) {
    const { width, height} = props;
    const classes = useStyles();

    return (
      <div style={{width: width}} className={classes.responsiveImg}>
        <SlidingTextBoxes className={classes.responsiveImg_img} width={width} height={height}/>
      </div>
    );
}
