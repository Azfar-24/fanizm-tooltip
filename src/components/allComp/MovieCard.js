// src/components/MovieCard.js
import React from "react";
import { FaCalendar, FaTrophy, FaBell } from "react-icons/fa"; // Icons used for the footer
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, time, imageUrl, id, coverImg, isHighlighted ,type}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const quizData = {
      title: title,
      time: time,
      imageUrl: imageUrl,
      coverImg: coverImg,
    };

    navigate(`/${id}`, { state: quizData });
  };

  return (
    <div
      className={`movie-card ${isHighlighted ? "highlighted" : ""}`}
      onClick={() => handleNavigation()}
    >
      <img src={imageUrl} alt={title} className="movie-image" />
      <div className="lqh-slide-body">
        <div className="card-label">{type}</div>
        <div className="time-countdown">
          <FaCalendar className="movie-cal-icon" />
          <span className="timer-fn">22 Oct, 04:55 PM</span>
        </div>
        <div className="winning ">
          <FaTrophy className="movie-trophy-icon" />

          <span className="primary-color">₹ 55</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
