import React from "react";
import style from "./Passion.module.css";
import {
  FaUserGraduate,
  FaCheckCircle,
  FaBookReader,
  FaSnowman,
} from "react-icons/fa";
import doctor from "../../public/assets/doctor.png";
import man from "../../public/assets/man.png";
import people from "../../public/assets/people.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const Passion = () => {
  return (
    <section>
      {/* <VerticalTimeline>
        <VerticalTimelineElement
          classNameName="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <h3 classNameName="vertical-timeline-element-title">For Student </h3>

          <p>Student ID card Photo Copy</p>
          <p>Birth Certificate (Only for Child & infant)</p>
          <p>Travel Letter or Leave letter from the Educational Institute.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          classNameName="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <div classNameName={style.timeLine}>
            <Image
              loading="lazy"
              src={people}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          classNameName="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSnowman />}
        >
          <div classNameName={style.timeLine}>
          <Image
            loading="lazy"
            src={doctor}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          classNameName="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSnowman />}
        >
          <h3 classNameName="vertical-timeline-element-title">For Medical </h3>
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
          classNameName="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaBookReader />}
        >
          <Image
            loading="lazy"
            src={man}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          classNameName="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaBookReader />}
        >
          <h3 classNameName="vertical-timeline-element-title">For Job Holder</h3>
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
      </VerticalTimeline> */}
      <section className={style.conferenceTimeline}>
        <div className={style.conferenceCenterLine}></div>
        <div className={style.conferenceTimelineContent}>
          <div className={style.timelineArticle}>
            <div className={style.contentLeftContainer}>
              <div className={style.contentLeft}>
                <h2 className="text-xl"> For Student</h2>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">Student ID card Photo Copy</small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                    Birth Certificate (Only for Child & infant)
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                    Travel Letter or Leave letter from the Educational
                    Institute.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                    Travel Letter or Leave letter from the Educational
                    Institute.
                  </small>
                </div>
              </div>
            </div>
            <div className={style.contentRightContainer}>
              <div className={style.contentRight}>
              <div className={style.timeLineImg}>
                <Image
                  loading="lazy"
                  src={people}
                  alt="Picture of the author"
                 className={style.tImg}
                />
                </div>
              </div>
            </div>
            <div className={style.metaDate}>
              <FaUserGraduate className={style.studentIcon}></FaUserGraduate>
            </div>
          </div>
          <div className={style.timelineArticle}>
            <div className={style.contentLeftContainer}>
              <div className={style.contentLeft}>
                <div className={style.timeLineImg}>
                <div className={style.timeLineImg}>
                <Image
                  loading="lazy"
                  src={doctor}
                  alt="Picture of the author"
                 className={style.tImg}
                />
                </div>
                </div>
              </div>
            </div>
            <div className={style.contentRightContainer}>
              <div className={style.contentRight}>
                <h2 className="text-xl">
                  For Medical
                </h2>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  In case of medical treatment, a copy of the appointment letter
                  from a hospital in Thailand and if applicable, an original
                  letter from a local doctor/hospital if the applicant is a
                  first-time traveler.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  Recent case summary of the patient’s medical reports issued by
                  the local hospital.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  Booking confirmation letter (such as Med letter & Action Plan)
                  of an Air Ambulance.
                  </small>
                </div>
              </div>
            </div>
            <div className={style.metaDate}>
              <FaUserGraduate className={style.studentIcon}></FaUserGraduate>
            </div>
          </div>
          <div className={style.timelineArticle}>
            <div className={style.contentLeftContainer}>
              <div className={style.contentLeft}>
                <h3 className="text-xl">
                  For Job Holder
                </h3>
                <div className="flex items-center mb-2">
                 <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  In the Case of Personal Account Statement (Savings Account) -
                  need to provide the Salary Certificate/Payslip last 03 months
                  </small>
                </div>
                <div className="flex items-center mb-2">
                 <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  Visiting card copy.
                  </small>
                </div>
                <div className="flex items-center mb-2">
                <span> <FaCheckCircle className={style.checkIcon}  /></span>
                  <small className="ml-2">
                  For Govt. employees - GO is required with an English
                  translation notary must be required.
                  </small>
                </div>
              </div>
            </div>
            <div className={style.contentRightContainer}>
              <div className={style.contentRight}>
              <div className={style.timeLineImg}>
                <Image
                  loading="lazy"
                  src={man}
                  alt="Picture of the author"
                 className={style.tImg}
                />
                </div>
              </div>
            </div>
            <div className={style.metaDate}>
              <FaUserGraduate className={style.studentIcon}></FaUserGraduate>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Passion;
