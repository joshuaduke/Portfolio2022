import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';



const RouteChangeTracker = () => {
    const location = useLocation();
    
    useEffect( function () {
        const path = location.pathname + location.search;
        ReactGA.set({ page: path });
        ReactGA.pageview(path); // Record a pageview for the given page
    }, [location],);
    
    return '';
};
export default RouteChangeTracker;