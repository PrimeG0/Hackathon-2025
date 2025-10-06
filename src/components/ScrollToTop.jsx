import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Makes the website much smooter as it scrolls to the top in refresh

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [location]);

    return <>
        {props.children}
    </>
  };

export default ScrollToTop;