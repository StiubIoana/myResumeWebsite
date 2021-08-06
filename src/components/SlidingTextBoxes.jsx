import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import homeImg from '../imgs/home1.jpg'
import dev from '../imgs/dev.jpg'
import design from '../imgs/design.jpg'
import artist from '../imgs/art.jpg'
import ResponsiveImage from './ResponsiveImg';

const useStyles = makeStyles((theme) => ({
    text: {
        color: 'black',
        fontFamily: 'Georgia',
        fontSize: '1.5em',
        textAlign: 'center'
    },
}));

export default function SlidingTextBoxes(props) {
    const {width} = props;

    const titles = [
        {
            title: "Developer",
            description: "Computer Science Student and Freelancer",
            imgUrl: dev,
        },
        {
            title: "Designer",
            description: "Graphic and Creative Designing",
            imgUrl: design,
        },
        {
            title: "Artist",
            description: "Calligrapher and Embroidery Artist",
            imgUrl: artist,
        }
    ];

    return (
        <Paper style={{ width:width, backgroundImage:`url(${homeImg})`, backgroundSize:'cover'}}>
            <Carousel>
                {
                    titles.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Paper>
    );
}

function Item(props)
{
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.text}>{props.item.title}</h2>
            <p className={classes.text}>{props.item.description}</p>
            <ResponsiveImage src={props.item.imgUrl} alt={props.item.title} width="32%"/>
        </div>
    )
}

