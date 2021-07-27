import React from 'react'
import {Button as MuiButton} from '@material-ui/core'

export default function Button(props) {

    console.log(props);
    const {className, color, text, ...other} = props;

    return (
        <MuiButton className={className} color={color} {...other}>{text}</MuiButton>
    )
}
