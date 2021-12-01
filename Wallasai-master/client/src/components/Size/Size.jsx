import React from 'react'
import { Nav,Burger } from '../../layouts';


const Size = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;
    React.useEffect(() => {
     const handleResizeWindow = () => setWidth(window.innerWidth);
     
      window.addEventListener("resize", handleResizeWindow);
      return () => {
       
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    if (width > breakpoint) {
      return (
        <Nav/>
      );
    }
    return (
     
      <Burger/>
    );
  }
  
  

  export default Size