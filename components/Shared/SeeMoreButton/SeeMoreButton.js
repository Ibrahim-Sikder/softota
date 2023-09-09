import React from 'react';
import style from './SeeMoreButton.module.css'
import { East } from '@mui/icons-material';
const SeeMoreButton = () => {
    return (
        <div>
             <div  className={style.seeMoreDestination}>
          <button>See More Destination</button>
          <East className={style.seeMoreBtn}/>
        </div>
        </div>
    );
};

export default SeeMoreButton;