import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../App.css";
import MovieSection from "../../components/allComp/MovieSection";
import Footer from "../../components/allComp/Footer";
import Header from "../../components/allComp/Header";
import { Autoplay } from "swiper/modules";
import Overlay from "../../components/allComp/Overlay";
// import "tippy.js/dist/tippy.css";

function Home() {
  const [step, setStep] = useState(1);

  // Sample movie data
  const movies = [
    {
      id: 1,
      title: "Bhoot Bhulaiyaa 3",
      time: "20 Oct, 12:00 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728565370.webp",
      coverImg:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728565370.webp",
      type: "Mega",
    },
    {
      id: 2,
      title: "Pushpa",
      time: "20 Oct, 01:00 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552982.webp",
      coverImg:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728650408.webp",
      type: "Mega",
    },
    {
      id: 3,
      title: "Vikram Vedha",
      time: "21 Oct, 06:20 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552308.webp",
      coverImg:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552357.webp",
      type: "Mega",
    },
    {
      id: 4,
      title: "Hanuman",
      time: "22 Oct, 04:45 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552598.webp",
      coverImg:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552609.webp",
      type: "Mega",
    },
  ];

  const trailers = [
    {
      id: 1,
      title: "Maidaan",
      time: "21 Oct, 01:10 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728553244.webp",
      type: "Mega",
    },
    {
      id: 2,
      title: "ManuMammel Boys",
      time: "22 Oct, 12:00 AM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728554665.webp",
      type: "Mega",
    },
    {
      id: 3,
      title: "Pushpa",
      time: "23 Oct, 12:00 AM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728554967.webp",
      type: "Mega",
    },
  ];

  return (
    <div
      className="Site-content-bg"
      style={{
        backgroundImage:
          "url('https://fanizm-prod.s3.amazonaws.com/upload/front_bg.png')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="routing-550-1">
        <div className="web-body-container-1">
          <Header />
          <div>
            <h3 align="center">This is your guided gameplay.</h3>
          </div>
          {Number(step) && (
            <div
              style={{
                textAlign: "left",
                zIndex: 10000,
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => {
                  setStep("end");
                  localStorage.setItem("skipClicked", 1);
                }}
              >
                skip
              </button>
            </div>
          )}
          <div className="swiper-wrap">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              style={{ height: "146px" }}
            >
              <SwiperSlide>
                <img
                  src="https://fanizm-prod.s3.amazonaws.com/upload/banner/1726689398.webp"
                  alt="Banner 1"
                  className="swiper-image"
                />
                <div className="slider-backdrop"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://fanizm-prod.s3.amazonaws.com/upload/banner/1726689398.webp"
                  alt="Banner 2"
                  className="swiper-image"
                />
                <div className="slider-backdrop"></div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://fanizm-prod.s3.amazonaws.com/upload/banner/1726689398.webp"
                  alt="Banner 3"
                  className="swiper-image"
                />
                <div className="slider-backdrop"></div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Movie Sections */}
          <MovieSection
            title="Movies"
            movies={movies}
            step={step}
            setStep={setStep}
            isHighlight={step === 3 && step !== "end"}
            showFilter={true}
          />
          <MovieSection
            title="Trailers"
            movies={trailers}
            step={0}
            setStep={setStep}
            isHighlight={step === 3 && step !== "end"}
          />

          {/* Footer */}
        </div>

        <Footer step={step} setStep={setStep} active={0} />
      </div>
    </div>
  );
}

export default Home;
