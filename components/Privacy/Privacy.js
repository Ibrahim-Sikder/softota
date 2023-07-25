import React from "react";
import style from "./Privacy.module.css";
const Privacy = () => {
  return (
    <div>
      <div className="w-full m-auto px-24 sm:px-2 md:px-10 bg-[#EDFBFF] py-20">
        <div>
          <h2 className="text-4xl md:text-2xl font-bold text-center pb-10">
            Privacy Policy
          </h2>
          <div className="mb-5">
            <p>
              <strong>Information You Supply to Us:</strong> We usually ask for
              basic things like your name, address, e-mail address, and phone
              number, and the details of anyone traveling with you, as well as
              your payment details. You might also choose to give us extra
              information about your Trip, such as when you expect to arrive.
            </p>
            <p>
              When you use our services, we also collect information about the
              device you re using, like your computer or phone, such as your IP
              address, web browser, and language settings. Sometimes we get
              information from other people, or automatically collect more
              information about you.
            </p>
          </div>

          <div className="mb-5">
            <strong className="text-bold text-2xl">
              How Does ShareTrip Make Use of Mobile Devices
            </strong>
            <p>
              We provide free mobile application which also involve the
              collection and processing of personal data in a similar manner to
              our website. However, our mobile applications offer the additional
              advantage of utilizing the location services present on your
              mobile device(s).
            </p>
          </div>
          <div className="mb-5">
            <strong className="text-xl">
              How Does ShareTrip Make Use of Social Media
            </strong>
            <p>
              ShareTrip’s services may involve the integration of social media
              in various ways, which may result in the collection of some of
              your personal data or the receipt of some of your information by
              the social media provider.
            </p>
          </div>
          <div className="mb-5">
            <strong className="text-xl">
              What Log Data does ShareTrip Collect
            </strong>
            <p>
              When you use our Service, in case of an error in the app we
              collect data and information on your phone called Log Data. This
              Log Data may include information such as your device Internet
              Protocol (“IP”) address, device name, operating system version,
              the configuration of the app when utilizing our Service, the time
              and date of your use of the Service, and other statistics.
            </p>
          </div>
          <div className="mb-5">
            <strong> We use the information in the following ways:</strong>
            <p>
              Information You Supply to Us. We will use this information:To
              provide you with information and/or services that you request from
              us; To contact you to provide the information requested.
            </p>
          </div>
          <div className="mb-5">
            <strong>
              {" "}
              How Does ShareTrip Use Personal Data Belonging to Children:
            </strong>
            <p>
              This service is not for use by anyone under the age of 13. We do
              not knowingly collect Personal Information from children under 13.
              If we discover that a child under 13 has provided us with personal
              information, we will immediately delete it from our servers. If
              you are a parent or guardian and you become aware that your child
              has provided us with personal information, please contact us
              immediately so that we can delete the information from our
              servers.
            </p>
          </div>
          <div className="mb-5">
            <strong>Disclosure of Your Information:</strong>
            <p>
              Any information you provide to us will either be emailed directly
              to us or may be stored on a secure server.
            </p>
            <p>
              ShareTrip does not sell or trade upon any of the above-foregoing
              information without the consent of the user or customer. ShareTrip
              does not store any credit/debit card details and all card-related
              information is stored at the respective bank after the selection
              of the payment gateway.
            </p>
          </div>

          <div className="mb-5">
            <strong>
              The foregoing information collected from the
              users/customers/travelers is put to the following use:
            </strong>
            <p>
              Customer name, address, phone number, traveler s name, and age are
              shared with applicable service providers like airlines, hotels,
              etc., for the purpose of reservation and booking the services for
              the customer/traveler. Information like phone number, email
              address, and billing address may be used for promotional purposes
              unless the customer/user has unsubscribed from such services. If
              you choose not to share this information, you can still visit the
              ShareTrip website, but you may be unable to access certain
              options, offers, and services.
            </p>
          </div>
          <div className="mb-5">
            <strong>
              How Does ShareTrip Share Your Data with Third Parties:
            </strong>
            <p>
              ShareTrip s services involve various parties for different reasons
              and in different ways. The primary reason we share your data is to
              provide the Trip Provider with the necessary information to
              complete your Trip Reservation.
            </p>
          </div>
          <p>
            In addition, we engage other parties to provide you with ShareTrip
            services, such as financial institutions, and advertisers of the
            ShareTrip corporate group. We may also share your data with
            governmental or other authorities if required by law in some
            instances. Users can request the deletion of their data through
            deletion of the user account from the app or by contacting us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
