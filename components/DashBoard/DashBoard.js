import React, { useEffect, useState } from "react";
import style from "./DashBoard.module.css";
import AdminLeftSide from "./AdminLeftSide";
import AdminRightSide from "./AdminRightSide";
import { getSession, signIn } from "next-auth/react";

const DashBoard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <section className={style.dashboardWrap}>
      <div className="grid grid-cols-12">
        <div>
          <AdminLeftSide></AdminLeftSide>
        </div>
        <div className="col-span-9">
          <AdminRightSide></AdminRightSide>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
