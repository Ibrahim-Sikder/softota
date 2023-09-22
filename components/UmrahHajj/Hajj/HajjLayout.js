import React from "react";
import style from "../Umrah/Umraha.module.css";
import Image from "next/image";
import Link from "next/link";
import hajj2 from "../../../public/assets/hajj2.png";
import umrah2 from "../../../public/assets/umra2.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Nav from "../../NavBarr/Nav";
import Footer from "../../Footer/Footer";
import dynamic from "next/dynamic";
import HajjActiveLink from "../HajjActiveLink/HajjActiveLink";
const HajjLayout = ({ children }) => {
  return (

    <div>
      <Nav/>
      <div className={style.packageWrap}>
      <aside className={style.packageLeftSide}>
      <div className={style.LeftSideWrap}>
                   <Accordion className={style.hajjAccordion}>
                <AccordionSummary
                className={style.hajjSummarries}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={style.hajjTypograpy}>
                  <p className="text-[16px] font-bold">Hajj Manegment </p>
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
                  <p className='font-bold'>Hajj Packages  </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="/hajj/economy"><p>Economy Hajj Package </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="/hajj/shifting"><p>Shifting Hajj Packages </p> </Link>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <Link href="/hajj/nonshifting"><p>Non Shifting Hajj Packages  </p> </Link>
                  </Typography>
                </AccordionDetails>
                
              </Accordion>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                 <HajjActiveLink href="/hajj">
                 <p>Brief History of Hajj  </p>
                 </HajjActiveLink>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                  <HajjActiveLink href="/hajj">
                  <p>Hajj Visa REquirement  </p>
                  </HajjActiveLink>
                  </Typography>
                  <Typography className={style.hajjTypograpy}>
                 <p>Hajj FAQ</p>
                  </Typography>
                </AccordionDetails>
                
              </Accordion>
              <div className="bg-[#0BB811] text-white w-full py-2 pl-3 mt-3 mb-10 rounded text-[14px]">
              <Link href='/umrah'><p>Umrah Management </p> </Link>
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
          </aside>
        <main className={style.packageRightSide}>
          {children}
          </main>
      </div>
      <Footer/>
    </div>
  );
};


export default dynamic(() => Promise.resolve(HajjLayout), { ssr: false });
