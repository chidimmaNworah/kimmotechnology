import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import styles from "./Expertise.module.scss";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Expertises = () => {
  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/expertise/expertise/`;
  const swiperRef = useRef(null);
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setExpertise(response.data);
        console.log(
          "expertise",
          response.data[0].img_url[0].name.split(".")[0]
        );
      })
      .catch((error) => console.error("Error fetching expertise:", error));
  }, []);

  return (
    <>
      <div className={styles.app__expertises}>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.app__skills_container}
        >
          {expertise.slice(0, 6).map((exp, i) => (
            <SwiperSlide key={i} className={styles.app__skills_item}>
              <h3 style={{ color: exp.name.split(".")[1] }}>
                {exp.name.split(".")[0]}
              </h3>
              <p className="text-center w-full">{exp.description}</p>
              <li className={styles.list}>
                {exp.img_url.map((item, index) => (
                  <div>
                    <div key={index} className={`${styles.img_div} app__flex`}>
                      <img src={item.url} alt={item.name} />
                    </div>
                    <p className="p-text">{item.name.split(".")[0]}</p>
                  </div>
                ))}
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MotionWrap(Expertises, "app__expertises");
