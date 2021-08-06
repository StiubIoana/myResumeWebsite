import React from 'react'
import {Carousel} from '3d-react-carousal';
import { makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    text: {
        color: 'black',
        fontFamily: 'Georgia',
        fontSize: '1.5em',
        textAlign: 'center'
    },
}));

export default function MyCarousel(props) {
    const titles = [
        {
            title: "Developer",
            description: "Computer Science Student and Freelancer"
        },
        {
            title: "Designer",
            description: "Graphic and Creative Designing"
        },
        {
            title: "Artist",
            description: "Calligrapher and Embroidery Artist"
        }
    ];

    const slides = (titles.map( (item, i) => <Item key={i} item={item} /> ));

    return (
        <Carousel slides={slides} autoplay={true} interval={1000} />
    );
}

function Item(props)
{
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.text}>{props.item.title}</h2>
            <p className={classes.text}>{props.item.description}</p>
        </div>
    )
}
