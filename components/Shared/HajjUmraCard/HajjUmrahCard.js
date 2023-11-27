import React, { useEffect, useState } from "react";
import { Beenhere } from "@mui/icons-material";
import Image from "next/image";
import img1 from "../../../public/assets/umrah6.webp";
import img2 from "../../../public/assets/umra2.jpg";
import img3 from "../../../public/assets/umra3.jpeg";
import img4 from "../../../public/assets/umrah4.webp";
import Link from "next/link";
import style from "./HajjUmrah.module.css";
import { useContext } from "react";
import { APIContext } from "@/Context/ApiContext";
import { useSelector } from "react-redux";
import UmrahCard from "./UmrahCard";
import { useRouter } from "next/router";
const HajjUmrahCard = ({ title, img }) => {
  const router = useRouter();
  const params = router.asPath;
  const refreshParams = params.split("/");
  const hajjDetailsData = useSelector((state) => state.hajj.hajjDetailsData);
  const umrahDetailsData = useSelector((state) => state.umrah.umrahDetailsData);
  const hotelDetailsData = useSelector((state) => state.hotel.hotelDetailsData);
  
  // console.log(error)
  // const datas = [
  //   {
  //     id: 1,
  //     title: "Platinum Umrah Package 2023 - 2024 from Bangladesh",
  //     image: img1,
  //     heading: "Platinum Umrah Package 2023",
  //     subheading: "",
  //     price: "150,000",
  //     desc: "Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters",
  //     desc2: "Sharing Room (4 Persons)",
  //     desc3: "Meals (3 Times)",
  //     desc4: "Excluding Kurbani",
  //     day: "20 days",
  //   },
  //   {
  //     id: 1,
  //     title: "Platinum Umrah Package 2023 - 2024 from Bangladesh",
  //     image: img,
  //     heading: "Platinum Umrah Package 2023",
  //     subheading: "",
  //     price: "150,000",
  //     desc: "Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters",
  //     desc2: "Sharing Room (4 Persons)",
  //     desc3: "Meals (3 Times)",
  //     desc4: "Excluding Kurbani",
  //     day: "20 days",
  //   },
  //   {
  //     id: 2,
  //     title: "Platinum Umrah Package 2023 - 2024 from Bangladesh",
  //     image: img2,
  //     heading: "Platinum Umrah Package 2023",
  //     subheading: "",
  //     price: "150,000",
  //     desc: "Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters",
  //     desc2: "Sharing Room (4 Persons)",
  //     desc3: "Meals (3 Times)",
  //     desc4: "Excluding Kurbani",
  //     day: "20 days",
  //   },
  //   {
  //     id: 3,
  //     title: "Platinum Umrah Package 2023 - 2024 from Bangladesh",
  //     image: img3,
  //     heading: "Platinum Umrah Package 2023",
  //     subheading: "",
  //     price: "150,000",
  //     desc: "Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters",
  //     desc2: "Sharing Room (4 Persons)",
  //     desc3: "Meals (3 Times)",
  //     desc4: "Excluding Kurbani",
  //     day: "20 days",
  //   },
  //   {
  //     id: 4,
  //     title: "Platinum Umrah Package 2023 - 2024 from Bangladesh",
  //     image: img4,
  //     heading: "Platinum Umrah Package 2023",
  //     subheading: "",
  //     price: "150,000",
  //     desc: "Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters",
  //     desc2: "Sharing Room (4 Persons)",
  //     desc3: "Meals (3 Times)",
  //     desc4: "Excluding Kurbani",
  //     day: "20 days",
  //   },
  // ];

  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("hajj")) || 1
  );
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("hajj", currentPage.toString());
  }, [currentPage]);
  // ...

  useEffect(() => {
    const storedPage = Number(sessionStorage.getItem("hajj")) || 1;
    setCurrentPage(storedPage);
    setMaxPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit) * pageNumberLimit
    );
    setMinPageNumberLimit(
      Math.ceil(storedPage / pageNumberLimit - 1) * pageNumberLimit
    );
  }, [pageNumberLimit]);

  // ...

  const handleClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    sessionStorage.setItem("hajj", pageNumber.toString());
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(hajjDetailsData?.length / limit); i++) {
    pages.push(i);
  }

  const renderPagesNumber = pages?.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-green-500 text-white px-2 rounded cursor-pointer"
              : "cursor-pointer text-black"
          }
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;
  const currentItems = hajjDetailsData?.slice(startIndex, lastIndex);

  const renderData = (hajjDetailsData) => {
    return (
      <>
        {hajjDetailsData.map((data) => (
          <div key={data.id} className={style.umrahPackageCardWrap}>
            <div className={style.packageCardWrap}>
              <div className={style.packageCard}>
                <div className={style.cardLeft}>
                  {data?.image[0] && (
                    <Image
                      loading="lazy"
                      src={data.image[0]}
                      alt="Umrah"
                      className={style.leftImg}
                      width={100}
                      height={100}
                    />
                  )}
                </div>
                <div className={style.cardRight}>
                  <div className={style.rightText}>
                    <div className={style.cardText}>
                      <h5 className="text-xl font-bold mb-2">
                        {data.hajj_package}
                      </h5>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.title}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.sub_title}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.date}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.day_night}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.requirement_list}</p>
                      </div>
                      {/* <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.popular_hajj_package}</p>
                      </div>
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.description}</p>
                      </div> */}
                      {/* <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.hajj_category}</p>
                      </div> */}
                      <div className={style.cardIconText}>
                        <Beenhere className={style.checkIcon} />
                        <p className="ml-2">{data.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.cardPrice}>
                    <p>{data.price}</p>
                    <Link href="/hajj/hajjbook">
                      <button>Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const handlePrevious = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("hajj", newPage.toString());

    if (newPage % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    sessionStorage.setItem("hajj", newPage.toString());

    if (newPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages?.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: maxPageNumberLimit + 1 } })}
        className="cursor-pointer text-black pl-1"
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (currentPage > pageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={() => handleClick({ target: { id: minPageNumberLimit } })}
        className="cursor-pointer text-black pr-1"
      >
        &hellip;
      </li>
    );
  }
  
  return (
    <section>
      <div>
        <div className={style.umrahImgWrap}>
          <Image
            loading="lazy"
            src={img}
            alt="umra"
            className={style.umraImage}
          />
        </div>
        <h3 className="text-3xl font-bold my-8">{title}</h3>
        {refreshParams.length === 2 ? (
          <div className="lg:text-xl text-center font-medium">
            Please select your favorable package.
          </div>
        ) : (
          <div>
            {(refreshParams.includes("economy") ||
              refreshParams.includes("nonshifting") ||
              refreshParams.includes("shifting")) && (
              <>
                {hajjDetailsData.length === 0 ? (
                  <div className="text-xl text-center flex justify-center items-center h-full">
                    No matching packages found.
                  </div>
                ) : (
                  <>
                    <section className="lg:w-10/12 mx-auto rounded  ">
                      {renderData(currentItems)}
                      <ul
                        className={
                          minPageNumberLimit < 5
                            ? "flex justify-center gap-3 md:gap-4 pb-5"
                            : "flex justify-center gap-[7px] md:gap-3 pb-5"
                        }
                      >
                        <button
                          onClick={handlePrevious}
                          disabled={currentPage === pages[0] ? true : false}
                          className={
                            currentPage === pages[0]
                              ? "text-gray-400"
                              : "text-black"
                          }
                        >
                          Previous
                        </button>
                        <span
                          className={
                            minPageNumberLimit < 5 ? "hidden" : "inline"
                          }
                        >
                          {pageDecrementBtn}
                        </span>
                        {renderPagesNumber}
                        {pageIncrementBtn}
                        <button
                          onClick={handleNext}
                          disabled={
                            currentPage === pages[pages?.length - 1]
                              ? true
                              : false
                          }
                          className={
                            currentPage === pages[pages?.length - 1]
                              ? "text-gray-400"
                              : "text-black pl-1"
                          }
                        >
                          Next
                        </button>
                      </ul>
                    </section>
                  </>
                )}
              </>
            )}
          </div>
        )}

        <div>
          {(refreshParams.includes("umrah-in-ramadan") ||
            refreshParams.includes("premium") ||
            refreshParams.includes("platinum") ||
            refreshParams.includes("family")) && <UmrahCard></UmrahCard>}
        </div>
      </div>
    </section>
  );
};

export default HajjUmrahCard;
