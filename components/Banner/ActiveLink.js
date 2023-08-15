import React from 'react';
import { Router, withRouter } from 'next/router';
import style from './ActiveLink.module.css'

const ActiveLink = ({router, href, children }) => {
(function prefetchPages(){
    if(typeof window !== 'undefined'){
        router.prefetch(router.pathname)
    }
})()
    
const handleClick = event =>{
    event.preventDefault();
    router.push(href)
  }

  const isCurrentPath = router?.pathname === href || router?.asPath === href;

    return (
        <div>
            <a href={href}
            onClick={handleClick}
        //     style={{background: 'red', color: 'white',
        //     background:isCurrentPath ? 'red' : 'yellow'
           
        // }}
        className={isCurrentPath ? `${style.activeLink}` : `${style.active}`}
            >

            {children}

            </a>
        </div>
    );
};

export default withRouter(ActiveLink);