import React from 'react';
import style from './FlightBookingLeftSide.module.css'
import { Flight, Groups, LocalMall, GppBad, SignalWifiBad, CorporateFare, ArrowForwardIos } from '@mui/icons-material';

const FlightBookingLeftSide = () => {
     return (
          <div>
               <div className={style.flightInfoWrap}>
                   <div>
                   <div className={style.flightDetail}>
                        <div className={style.iconWrap}>
                        <Flight className={style.flightIcons}/>
                        </div>
                         <span>Flight Details </span>
                    </div>
                    <div className={style.flightDetail}>
                        <div className={style.iconWrap}>
                        <SignalWifiBad className={style.flightIcon}/>
                        </div>
                         <span>Cancel Booking </span>
                    </div>
                    <div className={style.flightDetail}>
                        <div className={style.iconWrap}>
                        <CorporateFare className={style.flightIcon}/>
                        </div>
                         <span>Fare Details </span>
                    </div>
                    <div className={style.flightDetail}>
                        <div className={style.iconWrap}>
                        <Groups className={style.flightIcon}/>
                        </div>
                         <span>Traveller(S) Details </span>
                    </div>
                    <div className={style.flightDetail}>
                        <div className={style.iconWrap}>
                        <LocalMall className={style.flightIcon}/>
                        </div>
                         <span>Baaggage Details </span>
                    </div>
                    <div className={style.flightDetail}>
                        <div className={style.iconWrap}>
                        <GppBad className={style.flightIcon}/>
                        </div>
                         <span>Cancellation Policy </span>
                    </div>
                   </div>
               </div>
          </div>
     );
};

export default FlightBookingLeftSide;