import { React, useState, useEffect, makeStyles } from 'react';
import homeImg from '../imgs/home3.jpg'
import ResponsiveImage from './ResponsiveImg';
import ResponsiveDiv from './ResponsiveDiv';

const useStyles = makeStyles((theme) => ({
    responsiveContainer: {
        position: "relative",
        maxWidth: "100%",
    },
    responsiveElement: {
        position: "relative",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        heigth: "100%"
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
  const { height, width } = useWindowDimensions();
  let padding;
  if (width >= 768) padding = 62;
  else padding = 50;

  return (
    <div style = {{paddingTop:padding}}>
      <ResponsiveDiv width = {width} height={height}/>
    </div>
  );
}