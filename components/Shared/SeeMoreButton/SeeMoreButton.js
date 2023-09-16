import React from 'react';
import style from './SeeMoreButton.module.css'
import { East } from '@mui/icons-material';
import Link from 'next/link';
const SeeMoreButton = () => {
    return (
        <div>
             <Link href='/details'><div  className={style.seeMoreDestination}>
          <button>See More</button>
          <East className={style.seeMoreBtn}/>
        </div></Link>
        </div>
    );
};

export default SeeMoreButton;