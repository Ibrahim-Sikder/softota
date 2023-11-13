import Image from "next/image";
import React, { useState } from "react";
import login from "../../../public/assets/agent.png";
import { useRouter } from "next/router";
import style from "./signupAgent.module.css";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import { CloudUpload } from '@mui/icons-material';
import Link from "next/link";

const SignUpAgent = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || SignUp Agent </title>
        </Helmet>
      <Nav />
      <div className={style.signUpAgentWrap}>
        <div className={style.signUpAgent}>
          <div className={style.signUpAgenLeft}>
            <Image
            loading="lazy"
              src={login}
              alt="Picture of the author"
             className={style.agentImg}
            />
          </div>
          <div>
            <form>
             <div className={style.formControl}>
             <div className="mb-5 md:mr-5 sm:mr-[0px] relative">
                <label className={style.loginLabel}>Given Name</label> <br />
                <input
                  name="name"
                  type="text"
                  placeholder="Given Name"
                  className={style.loginInput}
                  required
                />
              </div>
              <div className="mb-5 relative">
                <label className={style.loginLabel}>Surname</label> <br />
                <input
                  name="name"
                  type="text"
                  placeholder="Surname"
                  className={style.loginInput}
                  required       

                />
              </div>
             </div>
             <div className={style.formControl}>
             <div className="mb-5 relative">
                <label className={style.loginLabel}>Company Name </label> <br />
                <input
                  name="anumber"
                  type="text"
                  placeholder="Company Name "
                  className={style.loginInput}
                  required
                />
              </div>
              <div className="mb-5 relative">
                <label className={style.loginLabel}>Email Address</label> <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={style.loginInput}
                  required
                />
              </div>
             </div>
             <div className={style.formControl}>
                
              <div className="mb-5 relative">
                <label className={style.loginLabel}>Password</label> <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={style.loginInput}
                  required
                />
              </div>
              <div className="mb-5 relative">
                <label className={style.loginLabel}>Confirm Password</label> <br />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confir Password"
                  className={style.loginInput}
                  required
                />
              </div>
             </div>
             <div className={style.formControl}>
             <div className="mb-5 relative">
                <label className={style.loginLabel}>Country Name</label> <br />
                <select   className={style.loginInput}>
                  <option selected value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Iran">Iran</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Japan">Japan</option>
                </select>
              </div>
             <div className="mb-5 relative">
                <label className={style.loginLabel}>City Name</label> <br />
                <select    className={style.loginInput}>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Beijing">Beijing</option>
                  <option value="Singapore Island">Singapore Island</option>
                  <option value="Iran">Iran</option>
                  <option value="Hanoi">Hanoi</option>
                  <option value="Tehran">Tehran</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
              </div>
             </div>
             <div className={style.formControl}>
                
             <div className="mb-5 relative">
                <label className={style.loginLabel}>Mobile Number</label> <br />
                <input
                  name="number"
                  type="number"
                  placeholder="Number"
                  className={style.loginInput}
                  required
                />
              </div>
              <div className="mb-5 relative">
                <label className={style.loginLabel}>Zip/Postal Code </label> <br />
                <input
                  name="postcode"
                  type="text"
                  placeholder="Postal Code"
                  className={style.loginInput}
                  required
                />
              </div>
             </div>
             <div className={style.fileUpload}>
                      <div className={style.uploadFile}>
                        <label for="files">
                          {" "}
                          <CloudUpload className={style.uploadIcon} /> Image
                          Upload{" "}
                        </label>
                        <input
                          name="image"
                          className={style.inputField}
                          type="file"
                          id="files"
                          class="hidden"
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex">
                      <input type="checkbox" />
                     <small className="ml-2"> I agree with sharing the above mentioned information with Ghuronti.</small>
                    </div>
             <div className="text-center">
             <div className="mb-5  mt-10">
                <button className={style.loginBtn} type="submit">
                  Sign Up as Agent
                </button>
              </div>
              <div className="">
                <small>Already a Partern?<Link href='/loginAgent'> <span className="text-[#4AB449]">Login Now</span></Link></small>
              </div>
             </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SignUpAgent;
