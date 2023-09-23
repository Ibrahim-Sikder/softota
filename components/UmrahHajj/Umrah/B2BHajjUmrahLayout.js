import React from "react";
import style from "./Umraha.module.css";
import Image from "next/image";
import Link from "next/link";
import hajj2 from "../../../public/assets/hajj2.png";
import umrah2 from "../../../public/assets/umra2.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../UserDashBoard/MoveText/MoveText";
import HajjActiveLink from "../HajjActiveLink/HajjActiveLink";
const UmrahLayout = ({ children }) => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className={style.packageWrap}>
        <aside className={style.packageLeftSide}>
          <div className={style.LeftSideWrap}>
            <Accordion className={style.umrahAccordion}>
              <AccordionSummary
                className={style.umrahSummary}
                expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={style.umrahTypograpy}>
                  <p className="text-[16px] font-bold">Umrah Offer </p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.umrahTypograpy}>
                  <Accordion className={style.hajjAccordion}>
                    <AccordionSummary
                      className={style.hajjSummary}
                      expandIcon={
                        <ExpandMoreIcon className={style.expandIcon} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={style.hajjTypograpy}>
                        <p className="font-bold">Umrah Packages </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={style.hajjTypograpy}>
                      <HajjActiveLink href="/b2bdashboard/umrah/umrah-in-ramadan">
                        <p>Umrah In Ramadan </p>
                        </HajjActiveLink>
                      </Typography>
                      <Typography className={style.hajjTypograpy}>
                        <HajjActiveLink  href="/b2bdashboard/umrah/premium">
                        <p>Premium Umrah Packages </p>
                        </HajjActiveLink>
                      </Typography>
                      <Typography className={style.hajjTypograpy}>
                      <HajjActiveLink href="/b2bdashboard/umrah/platinum/">
                      <p>Platinum Umrah Packages </p>
                        </HajjActiveLink>
                      </Typography>
                      <Typography className={style.hajjTypograpy}>
                        <HajjActiveLink href="/b2bdashboard/umrah/family">
                        <p>Family Umrah Packages </p>
                        </HajjActiveLink>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/umrah/benefit-umrah">
                  <p>Benefit of Umrah </p>
                  </HajjActiveLink>
                </Typography>
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/umrah/umrah-visa-requirement">
                  <p>Umrah Visa REquirement </p>
                  </HajjActiveLink>
                </Typography>

                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/umrah/perform-umrah">
                  <p>How to perform Umrah </p>
                  </HajjActiveLink>
                </Typography>
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/umrah/umrah-faq">
                  <p>Umrah FAQ </p>
                  </HajjActiveLink>
                </Typography>



              </AccordionDetails>
            </Accordion>




            <div className="my-3">

            <Accordion className={style.umrahAccordion}>
              <AccordionSummary
                className={style.umrahSummary}
                expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={style.umrahTypograpy}>
                  <p className="text-[16px] font-bold">Hajj Management</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.umrahTypograpy}>
                  <Accordion className={style.hajjAccordion}>
                    <AccordionSummary
                      className={style.hajjSummary}
                      expandIcon={
                        <ExpandMoreIcon className={style.expandIcon} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={style.hajjTypograpy}>
                        <p className="font-bold">Hajj Packages </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                    <Typography className={style.hajjTypograpy}>
                    <HajjActiveLink href="/b2bdashboard/hajj/economy">
                      <p>Economy hajj package</p>
                      </HajjActiveLink>
                      </Typography>
                     
                      <Typography className={style.hajjTypograpy}>
                        <HajjActiveLink href="/b2bdashboard/hajj/nonshifting">
                        <p>Non shifting hajj package </p>
                        </HajjActiveLink>
                      </Typography>

                      <Typography className={style.hajjTypograpy}>
                        <HajjActiveLink href="/b2bdashboard/hajj/shifting">
                        <p>Shifting hajj package </p>
                        </HajjActiveLink>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
               
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/hajj/pre-registration">
                  <p>Pre Registration Process </p>
                  </HajjActiveLink>
                </Typography>
                
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/hajj/visa-requirement">
                  <p>Hajj Visa REquirement </p>
                  </HajjActiveLink>
                </Typography>

                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/b2bdashboard/hajj/brief-history-hajj">
                  <p>Brief History Of Hajj </p>
                  </HajjActiveLink>
                </Typography>



              </AccordionDetails>
            </Accordion>


            </div>







            <div className="leftSideOffer">
              <div className={style.umrahOffer}>
                <Image alt="umrah" src={umrah2} className={style.umraImage} />
              </div>
              <h2 className="text-xl font-bold text-center mt-2">Hajj Offer</h2>
            </div>
            <div className="leftSideOffer">
              <div className={style.umrahOffer}>
                <Image alt="umrah" src={hajj2} className={style.umraImage} />
              </div>
              <h2 className="text-xl font-bold text-center mt-2">
                Umrah Offer
              </h2>
            </div>
          </div>
        </aside>

        <main className={style.packageRightSide}>{children}</main>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(UmrahLayout), { ssr: false });
