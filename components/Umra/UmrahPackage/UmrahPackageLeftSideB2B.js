import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hajj2 from "../../../public/assets/hajj2.png";
import umrah2 from '../../../public/assets/umra2.jpg'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from './Package.module.css'
const UmrahPackageLeftSideB2B = () => {
    return (
        <div>
            <div className={style.LeftSideWrap}>
                   <Accordion className={style.hajjAccordion}>
                <AccordionSummary
                className={style.hajjSummary}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={style.hajjTypograpy}>
                  <p className="text-[16px] font-bold">Umrah Offer </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={style.hajjTypograpy}>
                  <Accordion className={style.hajjAccordion}>
                <AccordionSummary
                className={style.hajjSummary}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={style.hajjTypograpy}>
                  <p className='font-bold'>Umrah Packages  </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="/b2bsearch/umrah/umrah/umrahInRamadan"><p>Umrah In Ramadan </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="/b2bsearch/umrah/umrah/premium"><p>Premium Umrah Packages </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="/b2bsearch/umrah/umrah/platinum/"><p>Platinum Umrah Packages  </p> </Link>
                  <Link href="/b2bsearch/umrah/umrah/family"><p>Family Umrah Packages  </p> </Link>
                  </Typography>
                </AccordionDetails>
                
              </Accordion>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href=" "><p>Benefit of Umrah </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href=" "><p>Umrah Visa REquirement  </p> </Link>
                  <Link href=" "><p>How to perform Umrah   </p> </Link>
                  <Link href=" "><p>Umrah FAQ </p> </Link>
                  </Typography>
                </AccordionDetails>
                
              </Accordion>
              <div className="bg-[#0BB811] text-white w-full rounded py-2 pl-3 mt-3 mb-10 text-[14px]">
              <Link href='/b2bsearch/umrah/hajj'><p>Hajj Management </p> </Link>
              </div>
                   <div className="leftSideOffer">
                   <div className={style.umrahOffer}>
                        <Image
                        alt='umrah'
                        src={umrah2}
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
    );
};

export default UmrahPackageLeftSideB2B;