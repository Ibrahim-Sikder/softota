import Image from "next/image";
import React, { useState } from "react";
import login from "../../../public/agent.png";
import { useRouter } from "next/router";
import style from "./signupAgent.module.css";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
const SignUpAgent = () => {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [anumber, setAnumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [loading, setLoading] = useState(false);

  // const router = useRouter();
  // const { createUser } = useContext(AuthContext);

  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const number = event.target.number.value;
  //   const anumber = event.target.anumber.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   const agent = { name, email, password, anumber, number };
  //   createUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       toast.success("User Created Successfully");
  //       router.push("/hotel");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   try {
  //     fetch("/api/blog", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(agent),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setTitle(data));
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <Nav />
      {/* <TopBar/>
          <Header/> */}
      <div className={style.signUpAgentWrap}>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
          <div>
            <Image
              src={login}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div>
            <form >
              <div className="mb-5 relative">
                <label className={style.loginLabel}>User Name</label> <br />
                <input
                  onChange={(event) => setName(event.target.value)}
                  name="name"
                  type="text"
                  placeholder="User Name"
                  className={style.loginInput}
                />
              </div>
              <div className="mb-5 relative" >
                <label className={style.loginLabel}>Email Address</label> <br />
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={style.loginInput}
                />
              </div>
              <div className="mb-5 relative">
                <label  className={style.loginLabel}>Password</label> <br />
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={style.loginInput}
                />
              </div>
              <div className="mb-5 relative">
                <label  className={style.loginLabel}>Mobile Number</label> <br />
                <input
                  onChange={(event) => setNumber(event.target.value)}
                  name="number"
                  type="number"
                  placeholder="Number"
                  className={style.loginInput}
                />
              </div>
              <div className="mb-5 relative">
                <label  className={style.loginLabel}>Agent Number </label> <br />
                <input
                  onChange={(event) => setAnumber(event.target.value)}
                  name="anumber"
                  type="number"
                  placeholder="Agent Number"
                  className={style.loginInput}
                />
              </div>
              <div className="mb-5  mt-10">
                <button className={style.loginBtn} type="submit">
                  Sign Up as Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpAgent;
