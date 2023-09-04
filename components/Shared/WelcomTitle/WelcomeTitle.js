import React from 'react';
import style from './WelcomeTitle.module.css'
import Typewriter from 'typewriter-effect';
const WelcomeTitle = () => {
    return (
        <div>
           
            <Typewriter
                className={style.typeWiter}
                options={{
                  strings: ['Welcome to Ghuronti! Find Tours, Flights & Hotels Packages !'],
                  autoStart: true,
                  loop: true,
                }}
              />
        </div>
    );
};

export default WelcomeTitle;