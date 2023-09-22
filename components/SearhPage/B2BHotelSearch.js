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
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";


const B2BHotelSearch = () => {
  const hotelData = [
    {
      id: 1,
      title: "Bashati Bay Resort",
      image: hotel,
      address:
        " Plot No.33, Block-A, Kolatoli Road, Sugandha Point Cox'x Bazar",
      price: 4500,
      lastPrice: 4000,
      night: 3,
    },
    {
      id: 1,
      title: "Bashati Bay Resort",
      image: hotel3,
      address:
        " Plot No.33, Block-A, Kolatoli Road, Sugandha Point Cox'x Bazar",
      price: 4500,
      lastPrice: 4000,
      night: 3,
    },
    {
      id: 1,
      title: "Bashati Bay Resort",
      image: hotel2,
      address:
        " Plot No.33, Block-A, Kolatoli Road, Sugandha Point Cox'x Bazar",
      price: 4500,
      lastPrice: 4000,
      night: 3,
    },
    {
      id: 1,
      title: "Bashati Bay Resort",
      image: hotel4,
      address:
        " Plot No.33, Block-A, Kolatoli Road, Sugandha Point Cox'x Bazar",
      price: 4500,
      lastPrice: 4000,
      night: 3,
    },
    {
      id: 1,
      title: "Bashati Bay Resort",
      image: hotel5,
      address:
        " Plot No.33, Block-A, Kolatoli Road, Sugandha Point Cox'x Bazar",
      price: 4500,
      lastPrice: 4000,
      night: 3,
    },
    {
      id: 1,
      title: "Bashati Bay Resort",
      image: hotel6,
      address:
        " Plot No.33, Block-A, Kolatoli Road, Sugandha Point Cox'x Bazar",
      price: 4500,
      lastPrice: 4000,
      night: 3,
    },
  ];
  return (
    <section>
      <div className={style.searchDetailHead}>
        <div>
          <h2 className="text-3xl font-bold">COX S BAZAR</h2>
          <span className="sm:my-3">
            27th August 2023 - 28th August 2023 4 Persons - 1 Rooms
          </span>
        </div>
        <Link href="/hotel">
          {" "}
          <button className="bg-[#4AB449] md:mt-[16px] text-white px-8 rounded-sm h-10 border-radius text-sm rounded">
            EDIT SEARCH{" "}
          </button>
        </Link>
      </div>
      <div className={style.hotelSearchBoxWrap}>
        <div className={style.hotelSearchLeftSide}>
          <div className={style.availableHotel}>
            <div>
              <h5 className="font-bold">95 Available Hotels </h5>
              <small>Price includes VAT & Tax </small>
            </div>
            <div className={style.bookBtnGroup}>
              <button className="bg-[#4AB449] hover:bg-[#26ADE2] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm mr-3 rounded">
                Highest Price{" "}
              </button>
              <Link href="/detailHotel">
                <button className="bg-[#26ADE2] hover:bg-[#4AB449] transition ease-in-out delay-150 transition-shadow text-white px-5 rounded-sm h-10 border-radius text-sm font-bold rounded">
                  Lowest Price
                </button>
              </Link>
            </div>
          </div>
          <div>
            {hotelData.map((hotel) => (
              <div key={hotel.id} className={style.SearchHotel}>
                <div className={style.detailBoxWrap}>
                  <div className={style.searchLeftSideImg}>
                    <Image
                      src={hotel.image}
                      alt="Picture of the author"
                      className={style.searchLeftImg}
                    />
                  </div>
                  <div className={style.searchBoxWrap}>
                    <div>
                      <h2 className="text-2xl font-bold ">{hotel.title} </h2>
                      <div className="flex my-3">
                        <FaStar className="text-[#4AB449]" />
                        <FaStar className="text-[#4AB449] mx-[3px]" />
                        <FaStar className="text-[#4AB449]" />
                      </div>
                      <div className="flex items-center justify-center">
                        <FaMapMarkerAlt className="mr-[5px] text-[#4AB449]" />
                        <span className="md:w-[350px]">{hotel.address}</span>
                      </div>
                    </div>
                    <div className={style.priceBlock}>
                      <div>
                        <span className={style.starFrom}>Starts from</span>
                        <span>
                          <del>BDT {hotel.price}</del>
                          <span className={style.starFrom}>/Night</span>
                        </span>
                        <div>
                          <span>
                            <small className="text-[#4AB449] ">44% OFF</small>
                            <strong>
                              BDT {hotel.lastPrice}
                              <span className={style.starFrom}>Night</span>
                            </strong>
                          </span>
                        </div>
                        <div>
                          <span className="text-xs">
                            Price Includes VAT & Tax{" "}
                          </span>
                        </div>
                        <Link href="/b2bdashboard/hotel/details">
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
            ))}
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
    </section>
  );
};

export default B2BHotelSearch;
