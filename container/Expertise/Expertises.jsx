import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import styles from "./Expertise.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Expertises = ({ expertise }) => {
  const swiperRef = useRef(null);
  // console.log("container expertise", expertise);

  return (
    <>
      <div className={styles.app__expertises}>
        {/* <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.app__skills_container}
        >
          {expertise?.slice(0, 6).map((exp, i) => (
            <SwiperSlide key={i} className={styles.app__skills_item}>
              <h3 style={{ color: exp.name.split(".")[1] }}>
                {exp.name.split(".")[0]}
              </h3>
              <p className="text-center w-full">{exp.description}</p>
              <li className={styles.list}>
                {exp.img_url.map((item, index) => (
                  <div key={index}>
                    <div key={index} className={`${styles.img_div} app__flex`}>
                      <img src={item.url} alt={item.name} />
                    </div>
                    <p className="p-text">{item.name.split(".")[0]}</p>
                  </div>
                ))}
              </li>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className={styles.boxes}>
          <div>
            <h3>Careers Site</h3>
            <div></div>
          </div>
          <div>
            <p>
              Find remote openings to upscale your career path in Jobs,
              Scholarships, Grants and Workshops
            </p>
            <div>
              <h1>100+</h1>
              <p>CAREERS posted</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default MotionWrap(Expertises, "app__expertises");
const WrappedExpertises = AppWrap(
  MotionWrap(Expertises, "app__expertises"),
  "expertises",
  "app__whitebg"
);

export default (props) => <WrappedExpertises {...props} />;
