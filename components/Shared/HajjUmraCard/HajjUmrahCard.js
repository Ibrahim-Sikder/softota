import React from 'react';
import { Beenhere } from "@mui/icons-material";
import Image from "next/image";
import img1 from "../../../public/assets/umrah6.jpg";
import img2 from "../../../public/assets/umra2.jpg";
import img3 from "../../../public/assets/umra3.jpeg";
import img4 from "../../../public/assets/umrah4.webp";
import Link from 'next/link';
import style from './HajjUmrah.module.css'
const HajjUmrahCard = ({heading, subheading, title, img, }) => {
  const datas = [
    {
      id: 1,
      title: 'Platinum Umrah Package 2023 - 2024 from Bangladesh',
      image: img1,
      heading: 'Platinum Umrah Package 2023',
      subheading: '',
      price: '150,000',
      desc: 'Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters',
      desc2: 'Sharing Room (4 Persons)',
      desc3: 'Meals (3 Times)',
      desc4: 'Excluding Kurbani',
      day: '20 days',

    },
    {
      id: 1,
      title: 'Platinum Umrah Package 2023 - 2024 from Bangladesh',
      image: img,
      heading: 'Platinum Umrah Package 2023',
      subheading: '',
      price: '150,000',
      desc: 'Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters',
      desc2: 'Sharing Room (4 Persons)',
      desc3: 'Meals (3 Times)',
      desc4: 'Excluding Kurbani',
      day: '20 days',

    },
    {
      id: 2,
      title: 'Platinum Umrah Package 2023 - 2024 from Bangladesh',
      image: img2,
      heading: 'Platinum Umrah Package 2023',
      subheading: '',
      price: '150,000',
      desc: 'Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters',
      desc2: 'Sharing Room (4 Persons)',
      desc3: 'Meals (3 Times)',
      desc4: 'Excluding Kurbani',
      day: '20 days',

    },
    {
      id: 3,
      title: 'Platinum Umrah Package 2023 - 2024 from Bangladesh',
      image: img3,
      heading: 'Platinum Umrah Package 2023',
      subheading: '',
      price: '150,000',
      desc: 'Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters',
      desc2: 'Sharing Room (4 Persons)',
      desc3: 'Meals (3 Times)',
      desc4: 'Excluding Kurbani',
      day: '20 days',

    },
    {

      id: 4,
      title: 'Platinum Umrah Package 2023 - 2024 from Bangladesh',
      image: img4,
      heading: 'Platinum Umrah Package 2023',
      subheading: '',
      price: '150,000',
      desc: 'Hotel in Makkah: Distance 400 meters from Haram Sharif & Madinah 300 meters',
      desc2: 'Sharing Room (4 Persons)',
      desc3: 'Meals (3 Times)',
      desc4: 'Excluding Kurbani',
      day: '20 days',

    },
  ]
    return (
        <section>
            <div>
            <div className={style.umrahImgWrap}>
            <Image src={img} alt="umra" className={style.umraImage} />
          </div>
          <h3 className="text-3xl font-bold my-8">{title}</h3>
            {
              datas.map(data=><div key={data.id} className={style.umrahPackageCardWrap}> 
              <div className={style.packageCardWrap}>
                <div className={style.packageCard}>
                  <div className={style.cardLeft}>
                    <Image src={data.image} alt="umra" className={style.leftImg} />
                  </div>
                  <div className={style.cardRight}>
                    <div className={style.rightText}>
                      <div className={style.cardText}>
                        <h5 className="text-xl font-bold mb-2">{heading}</h5>
                        <div className={style.cardIconText}>
                          <Beenhere className={style.checkIcon} />
                          <p className="ml-2">{data.desc}</p>
                        </div>
                        <div className={style.cardIconText}>
                          <Beenhere className={style.checkIcon} />
                          <p className="ml-2">{data.desc2}</p>
                        </div>
                        <div className={style.cardIconText}>
                          <Beenhere className={style.checkIcon} />
                          <p className="ml-2">{data.desc3}</p>
                        </div>
                        <div className={style.cardIconText}>
                          <Beenhere className={style.checkIcon} />
                          <p className="ml-2">{data.desc4}</p>
                        </div>
                        <div className={style.cardIconText}>
                          <Beenhere className={style.checkIcon} />
                          <p className="ml-2">{data.day}</p>
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
              </div>)
            }
            </div>
        </section>
    );
};

export default HajjUmrahCard;