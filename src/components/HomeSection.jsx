import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import homeImg from '../imgs/home3.jpg'
import ResponsiveImage from './ResponsiveImg';

const useStyles = makeStyles((theme) => ({
  homeImg: {

  }
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function Home() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <ResponsiveImage src={homeImg} alt="home" height = {height} width = {width}/>
    </div>
    
  );
}