import React from "react";
import style from "./ToursReserve.module.css";
import tours from "../../../public/assets/destination8.jpeg";
import tours2 from "../../../public/assets/tours3.jpeg";
import tours3 from "../../../public/assets/destination16.jpg";
import Link from "next/link";
import Image from "next/image";
import {
  PeopleOutline,
  StarOutline,
  AccessTime,
  MobileOff,
  Language,
  CheckCircleOutline,
  LocalPhone
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ToursReserve = () => {
  return (
    <div className={style.galleryWrap}>
      <div className="my-3">
        <h3 className="font-bold text-2xl">
          Fascinating Old Dhaka and Ship Breaking Yard Day Trip
        </h3>
        <div className="flex mt-2">
          <StarOutline className={style.star} />
          <StarOutline className={style.star} />
          <StarOutline className={style.star} />
          <StarOutline className={style.star} />
          <StarOutline className={style.star} />
        </div>
        <span>50 Reviews </span>
      </div>
      <div className={style.galleryWraps}>
        <div className={style.galleryleftSide}>
          <div className={style.leftSideImgWrap}>
            <Image alt="tours2" src={tours} className={style.gallaryImg} />
          </div>
          <div className="mt-5">
            <strong className="mb-3">About</strong>
            <p>
              Combine visits to Old Dhaka and the ship breaking yard on a single
              day tour. Immerse yourself in the life of the old city, traveling
              down the narrow winding streets in the company of a guide who
              knows all the hidden gems in the nooks and crannies. Visit the
              ship breaking yard to learn about the process and the history of
              the practice through guided commentary.
            </p>
            <p className="mt-5">
              from <strong>$108.77</strong> per adult (price varies by group
              size)
            </p>
            <div className="mt-5">
              <strong>
                Lowest price guaranteeReserve now & pay laterFree cancellation
              </strong>
            </div>
            <hr className="my-5" />
            <div className="my-3">
              <div className="flex mb-2">
                <PeopleOutline className={style.passengerIcon} />
                <p className="ml-2"> Ages 12 - 80 </p>
              </div>
              <div className="flex mb-2">
                <AccessTime className={style.passengerIcon} />
                <p className="ml-2"> Duration : 08:00 </p>
              </div>
              <div className="flex mb-2">
                <AccessTime className={style.passengerIcon} />
                <p className="ml-2">Start Time: Check availability </p>
              </div>
              <div className="flex mb-2">
                <MobileOff className={style.passengerIcon} />
                <p className="ml-2"> Mobile ticket </p>
              </div>
              <div className="flex mb-2">
                <Language className={style.passengerIcon} />
                <p className="ml-2"> English </p>
              </div>
            </div>

            <div className="my-5">
              <Accordion className={style.accordion}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className={style.accordionIcons} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={style.accordonSummary}
                >
                  <Typography className={style.accordionTypo}>
                    What is included{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={style.accordionDetails}>
                  <Typography className={style.accordionTypos}>
                    <div>
                      <ul>
                        <li>
                          <span>
                            <CheckCircleOutline
                              className={style.checkIcon}
                            />{" "}
                          </span>{" "}
                          Local taxes{" "}
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <CheckCircleOutline
                              className={style.checkIcon}
                            />{" "}
                          </span>{" "}
                          Buffet Lunch{" "}
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <CheckCircleOutline
                              className={style.checkIcon}
                            />{" "}
                          </span>{" "}
                          All activites{" "}
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <CheckCircleOutline
                              className={style.checkIcon}
                            />{" "}
                          </span>{" "}
                          Hotel/part pickup and drop-off{" "}
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <CheckCircleOutline
                              className={style.checkIcon}
                            />{" "}
                          </span>{" "}
                          Private Tour{" "}
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <CheckCircleOutline
                              className={style.checkIcon}
                            />{" "}
                          </span>{" "}
                          transport by private vehicle{" "}
                        </li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            
            <div className="my-5">
              <Accordion className={style.accordion}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className={style.accordionIcons} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={style.accordonSummary}
                >
                  <Typography className={style.accordionTypo}>
                  Accessibility

                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={style.accordionDetails}>
                  <Typography className={style.accordionTypos}>
                  <ul>
                    <li>Not wheelchair accessible </li>
                    <li>Near public transportation </li>
                  </ul>
                  <div className="mt-3">
                    <p>If you have questions about accessibility, we’d be happy to help. Just call the number below and reference the product code: 90303P1</p>
                  </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="my-5">
              <Accordion className={style.accordion}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className={style.accordionIcons} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={style.accordonSummary}
                >
                  <Typography className={style.accordionTypo}>
                  What to expect

                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={style.accordionDetails}>
                  <Typography className={style.accordionTypos}>
                 <div>
                  <strong>Itinerary</strong>
                  <p>This is a typical itinerary for this product</p>
                  <p><strong>Stop At:</strong> Shipyard Road, Shipyard Rd, Khulna, Bangladesh</p>
                  <p>Shipbuilding is a growing industry in Bangladesh with great potentials.</p>
                    <div>
                      <strong>Duration: 1 hour</strong>
                      <p><strong>Stop At:</strong> Baitul Mukarram Mosque, Dhaka City Bangladesh</p>
                      <p>See the Central Mosque of Dhaka City from inside which is 10th largest mosque in the world.</p>
                    </div>
                    <div>
                      <strong>Duration: 1 hour</strong>
                    </div>
                 </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
<div>
  <h3 className="text-xl font-bold">We can help</h3>
  <p>If you have questions about this tour or need help making your booking, we’d be happy to help. Just call the number below and reference the product code: 90303P1</p>
 <div className="mt-3">
 <strong> <LocalPhone className={style.checkIcon}/> +88 01885071488</strong>
 </div>
</div>

          </div>
        </div>

        <div className={style.galleryRightside}>
          <div>
            <div className={style.leftsideGalleryImg}>
              <Image alt="tours3" src={tours3} className={style.gallaryImg} />
            </div>
            <div className={style.leftsideGalleryImg}>
              <Image alt="tours3" src={tours2} className={style.gallaryImg} />
            </div>
          </div>
          <div className={style.galleryTextRightSide}>
            <div>
              <h3 className="text-bold text-xl mb-3">Reserve your spot</h3>
              <div className="flex justify-between">
                <div className={style.reserveLeft}>
                  <label> Select Date</label>
                  <input type="date" />
                </div>
                <div className={style.reserveRight}>
                  <PeopleOutline className={style.passengerIcon} />
                  <span>3</span>
                </div>
              </div>
              <div className="my-3">
                <p>Choose your tour type and time:</p>
                <small>1 option available for 9/3</small>
              </div>
              <div className={style.priceCard}>
                <h6>Fascinating Old Dhaka and Ship Breaking Yard Day Trip</h6>
                <small>Pickup included</small> <br />
                <button className={style.timeBtn}>10.00 am</button>
                <hr className="my-3" />
                <div className="flex mt-3 justify-between w-full ">
                  <span>2 Adults x $108.77</span>
                  <strong>Total $217.54</strong>
                </div>
                <small>(No additional taxes or booking fees)</small>
                <div className={style.checkout}>
                  <button>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursReserve;
