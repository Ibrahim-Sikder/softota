import React from 'react';
import style from './Footer.module.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook,FaTwitter,FaBimobject,FaWhatsappSquare,FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center'>
                <div className='mb-10'>
                    <h4 className='pb-5'>Bangladesh </h4>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+88 01885071488</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+88 01533389338</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span className='flex items-center'>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>Tropicana Tower, L 12, 45 <br /> Topkhana Rd, Purana Paltan Dhaka 1000</span>
                       </span>
                    </p>
                </div>
                <div className='mb-10'>
                    <h4 className='pb-5'>USA </h4>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+1 470 9296928</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+1 470 9071527</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span className='flex items-center'>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>2932 Arbor Creek Ln, <br />  Doraville, GA 30340</span>
                       </span>
                    </p>
                </div>
                <div className='mb-10'>
                    <h4 className='pb-5'>Social Media  </h4>
                    <p className={style.number}>
                       <span>
                       <span > <FaFacebook className={style.socialIcon}></FaFacebook> </span>
                       <span> <FaTwitter className={style.socialIcon}></FaTwitter> </span>
                       <span> <FaWhatsappSquare className={style.socialIcon}></FaWhatsappSquare> </span>
                       <span> <FaBimobject className={style.socialIcon}></FaBimobject> </span>
                       <span> <FaInstagramSquare className={style.socialIcon}></FaInstagramSquare> </span>
                       </span>
                    </p>
                    
                </div>
                <div className={style.privacy}>
                    <h4 className='pb-5'>HELP </h4>
                    <p className={style.number}>
                      <Link href='/faq'> <span>
                       FAQ
                       </span></Link>
                    </p>
                    <p className={style.number}>
                       <span>
                        <Link href='/privacy'><span>Privary Policy</span></Link>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                        <Link href='/termAndCondition'><span>Term & Condition </span></Link>
                       </span>
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;