import React from 'react';
import style from './Ticketbook.module.css';
import { ArrowBack } from "@mui/icons-material";
const Ticketbook = () => {
    return (
        <div>
            <div className={style.ticketInfo}>
           <div className='flex items-center justify-center'>
            <ArrowBack className={style.ticketIcon}/>
           <h3 className="text-2xl font-bold">Flight History</h3>
           </div>
            <button>Cancel Booking</button>
            <button>Issue with Balance </button>
            <button>Issue with cards/mfs</button>
            <button>Extend time limit </button>
            <button>download voucher </button>
      </div>
        </div>
    );
};

export default Ticketbook;