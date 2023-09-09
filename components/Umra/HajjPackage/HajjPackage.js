import React from 'react';
import style from '../UmrahPackage/Package.module.css'
import Image from 'next/image';
import umrah from '../../../public/assets/hajj3.jpg'
import packagae from '../../../public/assets/umrah.jpg'
import { Beenhere } from '@mui/icons-material';
import hajj2 from '../../../public/assets/hajj2.png'
import hajj3 from '../../../public/assets/hajj4.png'
import Link from 'next/link';
const Package = () => {
    return (
        <div>
           <div className={style.packageWrap}>
           <div className={style.packageLeftSide}> 
                   <div className={style.LeftSideWrap}>
                    <div className={style.packages}>
                        <p><Link href='/'>Home</Link></p>
                        <p><Link href='/'>Our Services</Link></p>
                        <p><Link href='/hajjUmra/hajj'>Hajj Package</Link></p>
                        <p><Link href='/hajjUmra/umrahPackage'>Umrah Package</Link></p>
                        <p><Link href='/'>Facilities</Link></p>
                        <p><Link href='/'>Guidance</Link></p>
                        <p><Link href='/'>Blog</Link></p>
                        <p><Link href='/aboutUs'>About Us</Link></p>
                    </div>


                   <div className="leftSideOffer">
                   <div className={style.umrahOffer}>
                        <Image
                        alt='hajj3'
                        src={hajj3}
                        className={style.umraImage}
                        />
                        
                    </div>
                    <h2 className="text-xl font-bold text-center mt-2">Hajj Offer</h2>
                   </div>
                   <div className="leftSideOffer">
                   <div className={style.umrahOffer}>
                        <Image
                        alt='umrah'
                        src={hajj2}
                        className={style.umraImage}
                        />
                        
                    </div>
                    <h2 className="text-xl font-bold text-center mt-2">Umrah Offer</h2>
                   </div>
                   </div>
                </div>
           <div className={style.packageRightSide}> 
                    <div className={style.umraImage}>
                        <Image
                        src={umrah}
                        alt='umra'
                        className={style.umraImage}
                        />
                    </div>
                    <div className={style.umrahPackageCardWrap}>
                        <h3 className="text-xl font-bold my-5">Most Affordable Hajj Packages 2023-2024 from Dhaka, Bangladesh</h3>
                        <div className={style.packageCardWrap}>
                            <div className={style.packageCard}>
                                <div className={style.cardLeft}>
                                <Image
                                src={packagae}
                                alt='umra'
                                className={style.leftImg}
                                />
                                </div>
                               <div className={style.cardRight}>
                               <div className={style.rightText}>
                                    <div className={style.cardText}>
                                        <h5 className="text-xl font-bold mb-2">Premium - Hajj Packages ( Non-Shifting)</h5>
                                        <div className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Sharing Room (4 Persons)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Meals (3 Times)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Excluding Kurbani</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>14 days</p>
                                        </div>
                                    </div>


                                </div>
                                <div className={style.cardPrice}>
                                    <p>Begins 1,20,000 BDT</p>
                                    <Link href='/hajjUmra/hajj/bookHajj'><button>Details</button></Link>
                                </div>
                               </div>
                            </div>
                        </div>
                        <div className={style.packageCardWrap}>
                            <div className={style.packageCard}>
                                <div className={style.cardLeft}>
                                <Image
                                src={packagae}
                                alt='umra'
                                className={style.leftImg}
                                />
                                </div>
                               <div className={style.cardRight}>
                               <div className={style.rightText}>
                                    <div className={style.cardText}>
                                        <h5 className="text-xl font-bold mb-2">Premium - Hajj Packages ( Non-Shifting)</h5>
                                        <div className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Sharing Room (4 Persons)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Meals (3 Times)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Excluding Kurbani</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>14 days</p>
                                        </div>
                                    </div>


                                </div>
                                <div className={style.cardPrice}>
                                    <p>Begins 1,20,000 BDT</p>
                                    <Link href='/hajjUmra/umrahBook'><button>Details</button></Link>
                                </div>
                               </div>
                            </div>
                        </div>
                        <div className={style.packageCardWrap}>
                            <div className={style.packageCard}>
                                <div className={style.cardLeft}>
                                <Image
                                src={packagae}
                                alt='umra'
                                className={style.leftImg}
                                />
                                </div>
                               <div className={style.cardRight}>
                               <div className={style.rightText}>
                                    <div className={style.cardText}>
                                        <h5 className="text-xl font-bold mb-2">Premium - Hajj Packages ( Non-Shifting)</h5>
                                        <div className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Sharing Room (4 Persons)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Meals (3 Times)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Excluding Kurbani</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>14 days</p>
                                        </div>
                                    </div>


                                </div>
                                <div className={style.cardPrice}>
                                    <p>Begins 1,20,000 BDT</p>
                                    <Link href='/hajjUmra/umrahBook'><button>Details</button></Link>
                                </div>
                               </div>
                            </div>
                        </div>
                        <div className={style.packageCardWrap}>
                            <div className={style.packageCard}>
                                <div className={style.cardLeft}>
                                <Image
                                src={packagae}
                                alt='umra'
                                className={style.leftImg}
                                />
                                </div>
                               <div className={style.cardRight}>
                               <div className={style.rightText}>
                                    <div className={style.cardText}>
                                        <h5 className="text-xl font-bold mb-2">Premium - Hajj Packages ( Non-Shifting)</h5>
                                        <div className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Sharing Room (4 Persons)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Meals (3 Times)</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>Excluding Kurbani</p>
                                        </div>
                                        <div  className={style.cardIconText}>
                                            <Beenhere className={style.checkIcon}/>
                                            <p className='ml-2'>14 days</p>
                                        </div>
                                    </div>


                                </div>
                                <div className={style.cardPrice}>
                                    <p>Begins 1,20,000 BDT</p>
                                    <Link href='/hajjUmra/umrahBook'><button>Details</button></Link>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
            </div>
           </div>
        </div>
    );
};

export default Package;