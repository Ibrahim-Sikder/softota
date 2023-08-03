import React from "react";
import style from "./HotelSearch.module.css";
import Image from "next/image";
import hotel from "../../public/assets/hotelll.jpeg";
import hotel2 from "../../public/assets/hotelll2.jpg";
import hotel3 from "../../public/assets/hotell3.jpeg";
import hotel4 from "../../public/assets/hotell4.jpeg";
import hotel5 from "../../public/assets/hotell5.jpeg";
import hotel6 from "../../public/assets/hotell6.jpeg";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const HotelSearch = () => {
  const images = [
    {
      img: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      img: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      img: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div>
      <div className={style.searchDetailHead}>
        <div>
          <h2 className="text-3xl font-bold">COX S BAZAR</h2>
          <span className="sm:my-3">
            27th August 2023 - 28th August 2023 4 Persons - 1 Rooms
          </span>
        </div>
        <button className="bg-[#4AB449] md:mt-[16px] text-white px-8 rounded-sm h-10 border-radius text-sm">
          EDIT SEARCH{" "}
        </button>
      </div>
      <div className={style.hotelSearchBoxWrap}>
        <div className={style.hotelSearchLeftSide}>
          <div className={style.availableHotel}>
            <div>
              <h5 className="font-bold">95 Available Hotels </h5>
              <small>Price includes VAT & Tax </small>
            </div>
            <div className={style.bookBtnGroup}>
              <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm mr-3">
                Highest Price{" "}
              </button>
              <Link href="/detailHotel">
                <button className="bg-[#26ADE2] hover:bg-[#4AB449] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                  Lowest Price
                </button>
              </Link>
            </div>
          </div>
          <div className={style.SearchHotel}>
            <div className={style.detailBoxWrap}>
              <div className={style.searchLeftSideImg}>
                <PhotoProvider>
                  {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <Image
                        src={hotel2}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
              <div className={style.searchBoxWrap}>
                <div>
                  <h2 className="text-2xl font-bold ">Bashati Bay Resort </h2>
                  <div className="flex my-3">
                    <FaStar className="text-[#4AB449]" />
                    <FaStar className="text-[#4AB449] mx-[3px]" />
                    <FaStar className="text-[#4AB449]" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                    <span>
                      Plot No.33, Block-A, Kolatoli Road, Sugandha Point, <br />{" "}
                      Cox s Bazar{" "}
                    </span>
                  </div>
                </div>
                <div className={style.priceBlock}>
                  <div>
                    <span className={style.starFrom}>Starts from</span>
                    <span>
                      <del>BDT 5000</del>
                      <span className={style.starFrom}>/Night</span>
                    </span>
                    <div>
                      <span>
                        <small className="text-[#4AB449] ">44% OFF</small>{" "}
                        <strong>
                          BDT 2240/{" "}
                          <span className={style.starFrom}>Night</span>{" "}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">Price Includes VAT & Tax </span>
                    </div>
                    <Link href="/search/hotel/book">
                      <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className={style.SearchHotel}>
            <div className={style.detailBoxWrap}>
              <div className={style.searchLeftSideImg}>
                <PhotoProvider>
                  {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <Image
                        src={hotel3}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
              <div className={style.searchBoxWrap}>
                <div>
                  <h2 className="text-2xl font-bold ">Bashati Bay Resort </h2>
                  <div className="flex my-3">
                    <FaStar className="text-[#4AB449]" />
                    <FaStar className="text-[#4AB449] mx-[3px]" />
                    <FaStar className="text-[#4AB449]" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                    <span>
                      Plot No.33, Block-A, Kolatoli Road, Sugandha Point, <br />{" "}
                      Cox s Bazar{" "}
                    </span>
                  </div>
                </div>
                <div className={style.priceBlock}>
                  <div>
                    <span className={style.starFrom}>Starts from</span>
                    <span>
                      <del>BDT 5000</del>
                      <span className={style.starFrom}>/Night</span>
                    </span>
                    <div>
                      <span>
                        <small className="text-[#4AB449] ">44% OFF</small>{" "}
                        <strong>
                          BDT 2240/{" "}
                          <span className={style.starFrom}>Night</span>{" "}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">Price Includes VAT & Tax </span>
                    </div>
                    <Link href="/search/hotel/book">
                      <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className={style.SearchHotel}>
            <div className={style.detailBoxWrap}>
              <div className={style.searchLeftSideImg}>
                <PhotoProvider>
                  {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <Image
                        src={hotel4}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
              <div className={style.searchBoxWrap}>
                <div>
                  <h2 className="text-2xl font-bold ">Bashati Bay Resort </h2>
                  <div className="flex my-3">
                    <FaStar className="text-[#4AB449]" />
                    <FaStar className="text-[#4AB449] mx-[3px]" />
                    <FaStar className="text-[#4AB449]" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                    <span>
                      Plot No.33, Block-A, Kolatoli Road, Sugandha Point, <br />{" "}
                      Cox s Bazar{" "}
                    </span>
                  </div>
                </div>
                <div className={style.priceBlock}>
                  <div>
                    <span className={style.starFrom}>Starts from</span>
                    <span>
                      <del>BDT 5000</del>
                      <span className={style.starFrom}>/Night</span>
                    </span>
                    <div>
                      <span>
                        <small className="text-[#4AB449] ">44% OFF</small>{" "}
                        <strong>
                          BDT 2240/{" "}
                          <span className={style.starFrom}>Night</span>{" "}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">Price Includes VAT & Tax </span>
                    </div>
                    <Link href="/search/hotel/book">
                      <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className={style.SearchHotel}>
            <div className={style.detailBoxWrap}>
              <div className={style.searchLeftSideImg}>
                <PhotoProvider>
                  {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <Image
                        src={hotel5}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
              <div className={style.searchBoxWrap}>
                <div>
                  <h2 className="text-2xl font-bold ">Bashati Bay Resort </h2>
                  <div className="flex my-3">
                    <FaStar className="text-[#4AB449]" />
                    <FaStar className="text-[#4AB449] mx-[3px]" />
                    <FaStar className="text-[#4AB449]" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                    <span>
                      Plot No.33, Block-A, Kolatoli Road, Sugandha Point, <br />{" "}
                      Cox s Bazar{" "}
                    </span>
                  </div>
                </div>
                <div className={style.priceBlock}>
                  <div>
                    <span className={style.starFrom}>Starts from</span>
                    <span>
                      <del>BDT 5000</del>
                      <span className={style.starFrom}>/Night</span>
                    </span>
                    <div>
                      <span>
                        <small className="text-[#4AB449] ">44% OFF</small>{" "}
                        <strong>
                          BDT 2240/{" "}
                          <span className={style.starFrom}>Night</span>{" "}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">Price Includes VAT & Tax </span>
                    </div>
                    <Link href="/search/hotel/book">
                      <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
           <div className={style.SearchHotel}>
            <div className={style.detailBoxWrap}>
              <div className={style.searchLeftSideImg}>
                <PhotoProvider>
                  {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <Image
                        src={hotel}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
              <div className={style.searchBoxWrap}>
                <div>
                  <h2 className="text-2xl font-bold ">Bashati Bay Resort </h2>
                  <div className="flex my-3">
                    <FaStar className="text-[#4AB449]" />
                    <FaStar className="text-[#4AB449] mx-[3px]" />
                    <FaStar className="text-[#4AB449]" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                    <span>
                      Plot No.33, Block-A, Kolatoli Road, Sugandha Point, <br />{" "}
                      Cox s Bazar{" "}
                    </span>
                  </div>
                </div>
                <div className={style.priceBlock}>
                  <div>
                    <span className={style.starFrom}>Starts from</span>
                    <span>
                      <del>BDT 5000</del>
                      <span className={style.starFrom}>/Night</span>
                    </span>
                    <div>
                      <span>
                        <small className="text-[#4AB449] ">44% OFF</small>{" "}
                        <strong>
                          BDT 2240/{" "}
                          <span className={style.starFrom}>Night</span>{" "}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">Price Includes VAT & Tax </span>
                    </div>
                    <Link href="/search/hotel/book">
                      <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className={style.SearchHotel}>
            <div className={style.detailBoxWrap}>
              <div className={style.searchLeftSideImg}>
                <PhotoProvider>
                  {images.map((item, index) => (
                    <PhotoView key={index} src={item}>
                      <Image
                        src={hotel6}
                        alt="Picture of the author"
                        className={style.searchLeftImg}
                      />
                    </PhotoView>
                  ))}
                </PhotoProvider>
              </div>
              <div className={style.searchBoxWrap}>
                <div>
                  <h2 className="text-2xl font-bold ">Bashati Bay Resort </h2>
                  <div className="flex my-3">
                    <FaStar className="text-[#4AB449]" />
                    <FaStar className="text-[#4AB449] mx-[3px]" />
                    <FaStar className="text-[#4AB449]" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                    <span>
                      Plot No.33, Block-A, Kolatoli Road, Sugandha Point, <br />{" "}
                      Cox s Bazar{" "}
                    </span>
                  </div>
                </div>
                <div className={style.priceBlock}>
                  <div>
                    <span className={style.starFrom}>Starts from</span>
                    <span>
                      <del>BDT 5000</del>
                      <span className={style.starFrom}>/Night</span>
                    </span>
                    <div>
                      <span>
                        <small className="text-[#4AB449] ">44% OFF</small>{" "}
                        <strong>
                          BDT 2240/{" "}
                          <span className={style.starFrom}>Night</span>{" "}
                        </strong>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">Price Includes VAT & Tax </span>
                    </div>
                    <Link href="/detailHotel">
                      <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold">
                        BOOK NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

        </div>
        <div className={style.hotelSearchRightSide}>
          <div className={style.propertyWrap}>
            <div className="mb-5">
              <TextField
                id="standard-basic"
                label="Search Hotel"
                variant="standard"
              />
            </div>

            <div>
              <strong>Filter:</strong>
              <div>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Your budget (per night) </strong> <br />
                      <span className="my-5 block">BDT 3400 - BDT 45000</span>
                      <input className="w-full" type="range" />
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Popular filters</strong> <br />
                      <div>
                        <Checkbox />
                        <span>Restaurant</span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Breakfast included </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>No prepayment </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>5 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Beachfront </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Beach </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Hotels </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Swimming Pool </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Fun things to do </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Fitness centre </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Beach </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Indoor pool </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Games room </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Hotel tub/Jacuzzi </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Meal</strong> <br />
                      <div>
                        <Checkbox />
                        <span>Breakfast </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Half Board </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Full Board </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Property rating</strong> <br />
                      <small>Includes stars and other ratings </small>
                      <div>
                        <Checkbox />
                        <span>3 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>4 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>5 stars </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Unrated </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Sustainability </strong> <br />
                      <div>
                        <Checkbox />
                        <span>
                          Travel Sustainable properties Properties taking steps
                          to make your stay more sustainable{" "}
                        </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Property type </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Hotels </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Entire hoes & apartments </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Resorts </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Bed preference </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Twin beds </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Double bed </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Large double bed </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Extra-large double bed </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Property accessibility </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Wheelchair accessible </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <strong>Room accessibility </strong> <br />
                      <div>
                        <Checkbox />
                        <span>Upper floors accessible by elevator </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Entire unit wheelchair accessible </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Toilet with grab rails </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Walk-in shower </span>
                      </div>
                      <div>
                        <Checkbox />
                        <span>Emergency cord in bathroom </span>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
