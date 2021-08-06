import { React, useState, useEffect } from 'react';
import ResponsiveDiv from './ResponsiveDiv';

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