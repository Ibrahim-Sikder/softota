"use client";

import Image from "next/image";
import React, {useState } from "react";
import style from "./SignUp.module.css";
import login from "../../public/assets/login.png";
import facebook from "../../public/assets/facebook.png";
import google from "../../public/assets/google.png";
import Link from "next/link";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
const SignUp = () => {
  const { register,reset, formState: { errors }, handleSubmit  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () => {};
  const router = useRouter();
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div>
          <Image
          loading="lazy"
            src={login}
            alt="Picture of the author"
            width={600}
            height={700}
          />
        </div>
        <div className="mt-10">
          <form>
            <div className="mb-5">
              <label className={style.inputLabel}>User Name</label> <br />
              <input
                name="name"
                type="text"
                placeholder="User Name"
                className={style.loginInput}
                {...register("name", { required: "Given Name is required", minLength: 8 })}
              />
            </div>
            {errors.name && <p className="text-red-500" role="alert">{errors.name?.message}</p>}
            <div className="mb-5">
              <label className={style.inputLabel}>Email Address</label> <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={style.loginInput}
                {...register("email", { required: 'Email is required' })}
              />
            </div>
            {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
            <div className="mb-5 relative">
              <label className={style.inputLabel}>Password</label> <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={style.loginInput}
                {...register("password", { required: 'Password is required' })}
              />
              <span
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className={style.ShowIcon}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="text-red-500" role="alert">{errors.password?.message}</p>}
            <div className="mb-5 ml-16 mt-10">
              <button className={style.loginBtn} type="submit">
                Sign Up
              </button>
            </div>
            <div className="flex items-center ">
              <p className={style.devided}></p>
              <span className="mx-5">or</span>
              <p className={style.devided}></p>
            </div>
            <div className="mb-5 ml-16 sm:ml-8 mt-5">
              <Link href="/signupAgent">
                <button className={style.loginBtn2} type="submit">
                  Apply For Agent
                </button>
              </Link>
            </div>
            <div className="mb-5 ml-16 sm:ml-8 mt-10">
              <Link href="/login">
                <button className={style.loginBtn3} type="submit">
                 Login Now{" "}
                </button>
              </Link>
            </div>
            <div className={style.loginWithProvider}>
              <div className={style.providerLoginWrap}>
                <div className={style.circle}>
                  <button
                  type="button">
                    <Image
                    loading="lazy"
                      src={google}
                      alt="Picture of the author"
                      width={40}
                      height={20}
                    />
                  </button>
                </div>
                <div className={style.circle}>
                  <button type="button">
                    <Image
                    loading="lazy"
                      src={facebook}
                      alt="Picture of the author"
                      width={40}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
