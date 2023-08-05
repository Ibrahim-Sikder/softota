import React from "react";
import style from "./Passion.module.css";
import { FaUserGraduate, FaBookReader, FaSnowman } from "react-icons/fa";
import doctor from "../../public/doctor.png";
import man from "../../public/man.png";
import people from "../../public/people.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const Passion = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <Image
            src={people}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">For Student </h3>

          <p>Student ID card Photo Copy</p>
          <p>Birth Certificate (Only for Child & infant)</p>
          <p>Travel Letter or Leave letter from the Educational Institute.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSnowman />}
        >
          <Image
            src={doctor}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSnowman />}
        >
          <h3 className="vertical-timeline-element-title">For Medical </h3>
          <p>
            In case of medical treatment, a copy of the appointment letter from
            a hospital in Thailand and if applicable, an original letter from a
            local doctor/hospital if the applicant is a first-time traveler.
          </p>
          <p>
            Recent case summary of the patient’s medical reports issued by the
            local hospital.
          </p>
          <p>
            Booking confirmation letter (such as Med letter & Action Plan) of an
            Air Ambulance.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaBookReader />}
        >
          <Image
            src={man}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaBookReader />}
        >
          <h3 className="vertical-timeline-element-title">For Job Holder</h3>
          <p>
            In the Case of Personal Account Statement (Savings Account) - need
            to provide the Salary Certificate/Payslip last 03 months
          </p>
          <p>Visiting card copy.</p>
          <p>
            For Govt. employees - GO is required with an English translation
            notary must be required.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    // <div className={style.timeline}>
    //      <div className={`${style.container} ${style.leftContainer}`}>
    //           <span><FaChild/></span>
    //           <div className={style.textBox}>
    //                <h2>For Student </h2>
    //                <p>Student ID card Photo Copy</p>
    //                <p>Birth Certificate (Only for Child & infant)</p>
    //                <p>Travel Letter or Leave letter from the Educational Institute.</p>
    //                <small className={style.leftContentArrow}></small>
    //           </div>
    //      </div>
    //      <div className={`${style.container} ${style.rightContainer}`}>
    //      <span><FaChild/></span>
    //           <div className={style.textBox}>
    //                <h2>For Student </h2>
    //                <p>Student ID card Photo Copy</p>
    //                <p>Birth Certificate (Only for Child & infant)</p>
    //                <p>Travel Letter or Leave letter from the Educational Institute.</p>
    //                <small className={style.rightContentArrow}></small>
    //           </div>
    //      </div>
    //      <div className={`${style.container} ${style.leftContainer}`}>
    //      <span><FaChild/></span>
    //           <div className={style.textBox}>
    //                <h2>For Student </h2>
    //                <p>Student ID card Photo Copy</p>
    //                <p>Birth Certificate (Only for Child & infant)</p>
    //                <p>Travel Letter or Leave letter from the Educational Institute.</p>
    //                <small className={style.leftContentArrow}></small>
    //           </div>
    //      </div>
    //      <div className={`${style.container} ${style.rightContainer}`}>
    //      <span><FaChild/></span>
    //           <div className={style.textBox}>
    //                <h2>For Student </h2>
    //                <p>Student ID card Photo Copy</p>
    //                <p>Birth Certificate (Only for Child & infant)</p>
    //                <p>Travel Letter or Leave letter from the Educational Institute.</p>
    //                <small className={style.rightContentArrow}></small>
    //           </div>
    //      </div>
    //      <div className={`${style.container} ${style.leftContainer}`}>
    //      <span><FaChild/></span>
    //           <div className={style.textBox}>
    //                <h2>For Student </h2>
    //                <p>Student ID card Photo Copy</p>
    //                <p>Birth Certificate (Only for Child & infant)</p>
    //                <p>Travel Letter or Leave letter from the Educational Institute.</p>
    //                <small className={style.leftContentArrow}></small>
    //           </div>
    //      </div>
    //       <div className={`${style.container} ${style.rightContainer}`}>
    //       <span><FaChild/></span>
    //           <div className={style.textBox}>
    //                <h2>For Student </h2>
    //                <p>Student ID card Photo Copy</p>
    //                <p>Birth Certificate (Only for Child & infant)</p>
    //                <p>Travel Letter or Leave letter from the Educational Institute.</p>
    //                <small className={style.rightContentArrow}></small>
    //           </div>
    //      </div>
    // </div>
    //     <div className={style.passionWrap}>
    //       <div className={style.singlePassion}>
    //      <div className={style.passionImgWrap}>
    //      <Image
    //           className={style.tourImg}
    //           src={people}
    //           alt="Picture of the author"
    //           width={500}
    //           height={500}
    //      />
    //      </div>
    //      <div className='ml-[52px]'>
    //           <h4 className='text-2xl'>For Studnet</h4>
    //           <ul>
    //                <li className='text-black'>Student ID card Photo Copy</li>
    //                <li className='text-black'>Birth Certificate (Only for Child & infant)</li>
    //                <li className='text-black'>Travel Letter or Leave letter from the Educational Institute.</li>
    //           </ul>
    //      </div>
    //       </div>
    //       <div className={style.singlePassion}>
    //       <div className={style.passionImgWrap}>
    //      <Image
    //           className={style.tourImg}
    //           src={doctor}
    //           alt="Picture of the author"
    //           width={500}
    //           height={500}
    //      />
    //      </div>
    //      <div className='ml-5'>
    //           <h4 className='text-2xl'>For Medical</h4>
    //           <ul>
    //                <li className='text-black'>Student ID card Photo Copy</li>
    //                <li className='text-black'>Birth Certificate (Only for Child & infant)</li>
    //                <li className='text-black'>Travel Letter or Leave letter from the Educational Institute.</li>
    //           </ul>
    //      </div>
    //       </div>
    //       <div className={style.singlePassion}>
    //       <div className={style.passionImgWrap}>
    //      <Image
    //           className={style.tourImg}
    //           src={man}
    //           alt="Picture of the author"
    //           width={500}
    //           height={500}
    //      />
    //      </div>
    //      <div className='ml-5'>
    //           <h4 className='text-2xl'>For Job Holder</h4>
    //           <ul>
    //                <li className='text-black'> In case of medical treatment, a copy of the appointment letter from a hospital in Thailand and if applicable, an original letter from a local doctor/hospital if the applicant is a first-time traveler.</li>
    //                <li className='text-black'>Recent case summary of the patient’s medical reports issued by the local hospital.</li>
    //                <li className='text-black'>Booking confirmation letter (such as Med letter & Action Plan) of an Air Ambulance.</li>

    //           </ul>
    //      </div>
    //       </div>
    //     </div>
  );
};

export default Passion;
