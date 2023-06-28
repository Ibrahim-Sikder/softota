import React from 'react';
import style from './Footer.module.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook,FaTwitter,FaBimobject,FaWhatsappSquare,FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                <div className='mb-10'>
                    <h4 className='pb-5'>BD Office Address </h4>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>Cox s Bazar, Ukhiya, Court Bazar</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       
                        <span>Cox s Bazar, Bangladesh</span>
                       </span>
                    </p>
                </div>
                <div className='mb-10'>
                    <h4 className='pb-5'>USA Office Address </h4>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>USA Address: XXX Creek Ln,</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       
                        <span>Daraville, GA XXX </span>
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
                       <span> <FaPhoneAlt className={style.socialIcon}></FaPhoneAlt> </span>
                       <span> <FaPhoneAlt className={style.socialIcon}></FaPhoneAlt> </span>
                       <span> <FaBimobject className={style.socialIcon}></FaBimobject> </span>
                       <span> <FaInstagramSquare className={style.socialIcon}></FaInstagramSquare> </span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>USA Address: XXX Creek Ln,</span>
                       </span>
                    </p>
                    <p className={style.number}>
                       <span>
                       
                        <span>Daraville, GA XXX </span>
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