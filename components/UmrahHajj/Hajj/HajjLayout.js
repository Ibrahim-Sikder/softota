import React from "react";
import style from "../Umrah/Umraha.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Nav from "../../NavBarr/Nav";
import Footer from "../../Footer/Footer";
import dynamic from "next/dynamic";
import HajjActiveLink from "../HajjActiveLink/HajjActiveLink";
import TourPackage from "../../../components/Tour/TourPackage/TourPackage";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "@/Context/DataContext";
 
 
const HajjLayout = ({ children }) => {
  const { handleGetHajjData, handleGetUmrahData } = useContext(DataContext);
  return (
    <div>
      <Nav />
      <div className={style.packageWrap}>
        <aside className={style.packageLeftSide}>
          <div className={style.LeftSideWrap}>
            <div className={style.umrahAccordion}>
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
                      <Typography
                        onClick={() => handleGetUmrahData("Umrah In Ramadan")}
                        className={style.hajjTypograpy}
                      >
                        <HajjActiveLink href="/umrah/umrah-in-ramadan">
                          <p>Umrah In Ramadan </p>
                        </HajjActiveLink>
                      </Typography>
                      <Typography
                        onClick={() =>
                          handleGetUmrahData("Premium Umrah Packages")
                        }
                        className={style.hajjTypograpy}
                      >
                        <HajjActiveLink href="/umrah/premium">
                          <p>Premium Umrah Packages </p>
                        </HajjActiveLink>
                      </Typography>
                      <Typography
                        onClick={() =>
                          handleGetUmrahData("Platinum Umrah Packages")
                        }
                        className={style.hajjTypograpy}
                      >
                        <HajjActiveLink href="/umrah/platinum">
                          <p>Platinum Umrah Packages </p>
                        </HajjActiveLink>
                      </Typography>
                      <Typography
                        onClick={() =>
                          handleGetUmrahData("Family Umrah Packages")
                        }
                        className={style.hajjTypograpy}
                      >
                        <HajjActiveLink href="/umrah/family">
                          <p>Family Umrah Packages </p>
                        </HajjActiveLink>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/umrah/benefit-umrah">
                    <p>Benefit of Umrah </p>
                  </HajjActiveLink>
                </Typography>
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/umrah/umrah-visa-requirement">
                    <p>Umrah Visa Requirement </p>
                  </HajjActiveLink>
                </Typography>

                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/umrah/perform-umrah">
                    <p>How to perform Umrah </p>
                  </HajjActiveLink>
                </Typography>
                <Typography className={style.umrahTypograpy}>
                  <HajjActiveLink href="/umrah/umrah-faq">
                    <p>Umrah FAQ </p>
                  </HajjActiveLink>
                </Typography>
              </AccordionDetails>
            </div>

            <div className="my-3">
              <div className={style.umrahAccordion}>
                <AccordionSummary
                  className={style.umrahSummary}
                  expandIcon={<ExpandMoreIcon className={style.expandIcon} />}
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
                      >
                        <Typography className={style.hajjTypograpy}>
                          <p className="font-bold">Hajj Packages </p>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          onClick={() =>
                            handleGetHajjData("Economy Hajj Package")
                          }
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/hajj/economy">
                            <p>Economy Hajj Package</p>
                          </HajjActiveLink>
                        </Typography>

                        <Typography
                          onClick={() =>
                            handleGetHajjData("Non Shifting Hajj Package")
                          }
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/hajj/nonshifting">
                            <p>Non shifting hajj package </p>
                          </HajjActiveLink>
                        </Typography>

                        <Typography
                          onClick={() =>
                            handleGetHajjData("Shifting Hajj Package")
                          }
                          className={style.hajjTypograpy}
                        >
                          <HajjActiveLink href="/hajj/shifting">
                            <p>Shifting hajj package </p>
                          </HajjActiveLink>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>

                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/hajj/pre-registration">
                      <p>Pre Registration Process </p>
                    </HajjActiveLink>
                  </Typography>

                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/hajj/visa-requirement">
                      <p>Hajj Visa Requirement </p>
                    </HajjActiveLink>
                  </Typography>

                  <Typography className={style.umrahTypograpy}>
                    <HajjActiveLink href="/hajj/brief-history-hajj">
                      <p>Brief History Of Hajj </p>
                    </HajjActiveLink>
                  </Typography>
                </AccordionDetails>
              </div>
            </div>

            <div className={style.latestHajjOffer}>
              <h2 className="text-xl font-bold mt-2">Latest Hajj Package </h2>
              <ul>
                <li>Economy Hajj Package </li>
                <li>Premium Hajj Package </li>
                <li>Platinum Hajj Package </li>
              </ul>
            </div>

            <div className={style.latestHajjOffer}>
              <h2 className="text-xl font-bold mt-2">Latest Umrah Package </h2>
              <ul>
                <li>Family Hajj Package </li>
                <li>Premium Hajj Package </li>
                <li>Platinum Hajj Package </li>
              </ul>
            </div>
          </div>
        </aside>

        <main className={style.packageRightSide}>{children}</main>
      </div>
      <div className="px-[20px] mb-8">
      <TourPackage/>
      </div>
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(HajjLayout), { ssr: false });
