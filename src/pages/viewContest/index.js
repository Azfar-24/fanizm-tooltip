import React, { useState } from "react";
import "./viewContest.css";
import "../../App.css";
import Tippy from "@tippyjs/react";
import { FaArrowLeft, FaShare, FaTrophy } from "react-icons/fa";
import Footer from "../../components/allComp/Footer";
import { useNavigate } from "react-router-dom";
import CircularProgress from "../../components/allComp/CircularProgress";

const ViewContest = () => {
  const nevigate = useNavigate();
  const [viewContest, setViewContest] = useState(0);
  const upcomingContest = [
    {
      id: 2,
      contestType: "HEAD TO HEAD",
      contestDes: "Head 2 Head",
      type: "Practice Contest",
      heading: "Practice Contest",
      entry: "Entry Ticket",
      buttonType: "₹ 55",
      left: 1,
      slots: 2,
    },
  ];
  const result = [
    {
      result: "Result:",
      resAns: 0,
      rank: "Rank:",
      rankAns: 1,
      won: "Won",
      wonAns: "--",
    },
    {
      result: "Result:",
      resAns: 0,
      rank: "Rank:",
      rankAns: 1,
      won: "Won",
      wonAns: "--",
    },
    {
      result: "Result:",
      resAns: 0,
      rank: "Rank:",
      rankAns: 1,
      won: "Won",
      wonAns: "--",
    },
  ];

  return (
    <>
      <div className="toast-wrapper" style={{ Zindex: 99999 }}>
        <div className="toast-inner-wrapper blur-bg"></div>
        <div className="toast-inner-wrapper">
          <span className="icon-wrap">
            <i className=""></i>
          </span>
          <span className="text-wrap"></span>
          <i className="icon-close"></i>
        </div>
      </div>
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
          <div className="web-body-container-1 pb0">
            {viewContest === 0 ? (
              <>
                <div className="header quiz-header">
                  <div className="head-col-left">
                    <div className="head-col-left-icon">
                      <FaArrowLeft className="head-action-btn icon-left-arrow" />
                    </div>
                  </div>
                  <div className="head-col-center-fn">
                    <span className="head-title">My Quiz Contests</span>
                  </div>
                  <div className="head-col-right-fn"></div>
                </div>
                <div className="default-header-placeholder-fn"></div>
                <div className="burger-menu-backdrop-fn "></div>
                <div className="mobile-wrap-fn">
                  <div className="tabs-primary-nav-fn ">
                    <a className="select">Mega</a>
                    <a className="">One On One</a>
                  </div>

                  <div className="ptr-fn my-contest-ptr__pull-down-fn lighten">
                    <div className="ptr__children-fn">
                      <div className="tabs-primary-fn">
                        <div className="clearfix row">
                          <div className="top-fixed my-contest-tab circular-tab new-tab  col-xs-12">
                            <ul className="nav">
                              <li role="presentation" className="active">
                                <a role="button" href="#">
                                  Upcoming
                                </a>
                              </li>
                              <li role="presentation" className="live-contest-fn ">
                                <a role="button" href="#">
                                  <span className="live-highlight-fn">
                                    <img
                                      src="images/icon-live.png"
                                      alt="live"
                                    />
                                    <span className="live-indicator"></span>
                                  </span>
                                  Live
                                </a>
                              </li>
                              <li role="presentation" className="">
                                <a role="button" href="#">
                                  Completed
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="web-container-fn contest-list-fning-web-conatiner header-margin minus-header-height bg-white contest-list-fning-new-fn ML-contest-list-fning LQ-contest-list-fn-view with-detail-screen">
                    <div className="webcontainer-inner-fn">
                      <div className="ptr-fn">
                        <div className="ptr__children-fn">
                          <div className="container-tab-wrap-fn">
                            <div className="row">
                              <div className="col-sm-12 w-100">
                                <div className="infinite-scroll-component__outerdiv-fn">
                                  <div
                                    className="infinite-scroll-component-fn"
                                    style={{ height: "auto", overflow: "auto" }}
                                  >
                                    <div className="contest-list-wrapper-fn xmt20 mb20">
                                      {upcomingContest.map((contest, i) => (
                                        <div className="contest-list-fning-card is-mega-contest">
                                          <div className="rookie-contest-view-fn title-wrap-inner d-flex">
                                            <div className="contest-list-fning-card-header-fn">
                                              <div className="contest-right-fn">
                                                <div className="contest-name-heading">
                                                  Pushpa The Rise
                                                </div>
                                                <div className="contest-name-heading-description">
                                                  <div
                                                    class="que-timer-fn"
                                                    style={{ display: "flex" }}
                                                  >
                                                    <span class="timer-fn">
                                                      <div class="timer-fn link-danger">
                                                        02 : 17 : 05
                                                      </div>
                                                    </span>
                                                    <span class="separator">
                                                      .
                                                    </span>
                                                    <span class="question">
                                                      10 Questions
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="title-right-fn">
                                              movies
                                            </div>
                                          </div>
                                          <div>
                                            <div
                                              className="contest-list-fn contest-list-fning-list xquiz-contest-card contest-card-body contest-box"
                                              style={{ marginBottom: "20px" }}
                                            >
                                              <div className="contest-list-header-fn">
                                                <div className="contest-heading-fn">
                                                  <h3 className="win-type">
                                                    <span className="position-relative">
                                                      <span>
                                                        Test your skils
                                                      </span>
                                                    </span>

                                                    <FaShare className="icon-share-arrow" />
                                                  </h3>
                                                </div>
                                                <div className="display-table d-flex top-btm-10px contest-pbar-view ">
                                                  <div className="progress-bar-default-fn display-table-cell v-mid">
                                                    <div className="progress-fn">
                                                      <div
                                                        role="progressbar"
                                                        className="progress-bar"
                                                        aria-valuenow={250}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{
                                                          width: `${
                                                            ((contest.slots -
                                                              contest.left) /
                                                              contest.slots) *
                                                            100
                                                          }%`,
                                                        }}
                                                      ></div>
                                                    </div>

                                                    <div className="progress-bar-value-fn">
                                                      <span className="total-entries">
                                                        {contest.left} left
                                                      </span>
                                                      <span className="min-entries">
                                                        {contest.slots} Slots
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <Tippy
                                                    theme="custom"
                                                    animation="fade"
                                                    visible={true}
                                                    content={
                                                      "This is a highlighted movie!"
                                                    }
                                                  >
                                                    <div
                                                      className="view-btn highlighted"
                                                      onClick={() => {
                                                        setViewContest(1);
                                                      }}
                                                    >
                                                      View
                                                    </div>
                                                  </Tippy>
                                                </div>
                                              </div>
                                              <div className="quiz-overlay" />
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer active={1} />
              </>
            ) : viewContest === 1 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left-fn"
                    onClick={() => {
                      setViewContest(0);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center-fn">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right-fn"></div>
                </div>
                <Tippy
                  theme="custom"
                  animation="fade"
                  visible={true}
                  content={"This is a highlighted movie!"}
                  placement="bottom"
                >
                  <div
                    className="overlay__pyt-img highlighted"
                    onClick={() => {
                      setViewContest(2);
                    }}
                  >
                    <img src="images/view-contest.jpg" alt="qr" />
                  </div>
                </Tippy>
                <div className="button-group quiz-lang-header">
                  <button className="button left">Language</button>
                  <button className="button right">English</button>
                </div>
              </>
            ) : viewContest === 2 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left-fn"
                    onClick={() => {
                      setViewContest(1);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center-fn">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right-fn"></div>
                </div>{" "}
                <div
                  className="overlay__pyt-img "
                  onClick={() => {
                    setViewContest(3);
                  }}
                >
                  <div className="practice-contest__container">
                    <div className="practice-contest__header">
                      <div className="practice-contest__lhs">
                        <div className="practice-contest__points">
                          <span>10</span>
                          <p>Total Points</p>
                        </div>
                      </div>
                      <div className="practice-contest__rhs">
                        <div className="practice-contest__rank-wrap">
                          <div className="practice-contest__label">
                            <FaTrophy className="trophy-icon" />
                            <span>Practice Contests</span>
                          </div>
                          <div className="practice-contest__rank">
                            <span>1</span>
                            <p>Rank</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="practice-contest__qus-number">
                      <ul>
                        <li className="current">1</li>
                        <li className="">2</li>
                        <li className="">3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                      </ul>
                    </div>

                    <div className="practice-contest__qus-heading">
                      <span>What was Shekhawat's designation?????</span>
                    </div>

                    <div className="practice-contest__progBar">
                      <CircularProgress duration={10} />
                    </div>

                    <div class="practice-contest__qus-list">
                      <Tippy
                        theme="custom"
                        animation="fade"
                        visible={true}
                        content={"This is a highlighted movie!"}
                      >
                        <div
                          class="practice-contest__qus-item selected"
                          onClick={() => setViewContest(3)}
                        >
                          <span>SP</span>
                        </div>
                      </Tippy>
                      <div class="practice-contest__qus-item">
                        <span>DSP</span>
                      </div>
                      <div class="practice-contest__qus-item">
                        <span>ACP</span>
                      </div>
                      <div class="practice-contest__qus-item">
                        <span>IPS</span>
                      </div>
                      <div class="quiz-overlay"></div>
                    </div>

                    <div className="practice-contest__note">
                      <span>Correct answer will get you 10 points.</span>
                    </div>
                  </div>
                </div>
              </>
            ) : viewContest === 3 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left-fn"
                    onClick={() => {
                      setViewContest(2);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center-fn">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right-fn"></div>
                </div>
                <div className="overlay__pyt-img ">
                  <div className="practice-contest__container">
                    <div className="practice-contest__header">
                      <div className="practice-contest__lhs">
                        <div className="practice-contest__points">
                          <span>10</span>
                          <p>Total Points</p>
                        </div>
                      </div>
                      <div className="practice-contest__rhs">
                        <div className="practice-contest__rank-wrap">
                          <div className="practice-contest__label">
                            <FaTrophy className="trophy-icon" />
                            <span>Practice Contests</span>
                          </div>
                          <div className="practice-contest__rank">
                            <span>1</span>
                            <p>Rank</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="practice-contest__qus-number">
                      <ul>
                        <li className="correct">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                      </ul>
                    </div>

                    <div className="practice-contest__qus-heading">
                      <span>What was Shekhawat's designation?????</span>
                    </div>

                    <div className="practice-contest__progBar">
                      <CircularProgress duration={10} />
                    </div>

                    <div class="practice-contest__qus-list">
                      <Tippy
                        theme="custom"
                        animation="fade"
                        visible={true}
                        content={"This is a highlighted movie!"}
                      >
                        <div
                          class="practice-contest__qus-item correct"
                          onClick={() => setViewContest(4)}
                        >
                          <span>SP</span>
                        </div>
                      </Tippy>
                      <div class="practice-contest__qus-item">
                        <span>DSP</span>
                      </div>
                      <div class="practice-contest__qus-item">
                        <span>ACP</span>
                      </div>
                      <div class="practice-contest__qus-item">
                        <span>IPS</span>
                      </div>
                      <div class="quiz-overlay"></div>
                    </div>

                    <div className="practice-contest__note">
                      <span>Correct answer will get you 10 points.</span>
                    </div>
                  </div>
                </div>
              </>
            ) : viewContest === 4 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left-fn"
                    onClick={() => {
                      setViewContest(3);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center-fn">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right-fn"></div>
                </div>
                <div className="overlay__pyt-img ">
                  <div className="practice-contest__container">
                    <div className="practice-contest__header">
                      <div className="practice-contest__lhs">
                        <div className="practice-contest__points">
                          <span>10</span>
                          <p>Total Points</p>
                        </div>
                      </div>
                      <div className="practice-contest__rhs">
                        <div className="practice-contest__rank-wrap">
                          <div className="practice-contest__label">
                            <FaTrophy className="trophy-icon" />
                            <span>Practice Contests</span>
                          </div>
                          <div className="practice-contest__rank">
                            <span>1</span>
                            <p>Rank</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="practice-contest__qus-number">
                      <ul>
                        <li className="correct">1</li>
                        <li className="current">2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                      </ul>
                    </div>

                    <div className="practice-contest__qus-heading">
                      <span>
                        What caused Konda Readdy to loose his hand?????
                      </span>
                    </div>

                    <div className="practice-contest__progBar">
                      <CircularProgress duration={10} />
                    </div>

                    <div class="practice-contest__qus-list">
                      <Tippy
                        theme="custom"
                        animation="fade"
                        visible={true}
                        content={"This is a highlighted movie!"}
                      >
                        <div
                          class="practice-contest__qus-item selected"
                          onClick={() => setViewContest(5)}
                        >
                          <span>Bomb</span>
                        </div>
                      </Tippy>
                      <div class="practice-contest__qus-item">
                        <span>Axe</span>
                      </div>
                      <div class="practice-contest__qus-item">
                        <span>Bullet</span>
                      </div>
                      <div class="practice-contest__qus-item">
                        <span>None of the above</span>
                      </div>
                      <div className="quiz-overlay"></div>
                    </div>

                    <div className="practice-contest__note">
                      <span>Correct answer will get you 10 points.</span>
                    </div>
                  </div>
                </div>
              </>
            ) : viewContest === 5 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left-fn"
                    onClick={() => {
                      setViewContest(4);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center-fn">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right-fn"></div>
                </div>
                <div className="overlay__pyt-img ">
                  <div className="practice-contest__container">
                    <div className="practice-contest__header">
                      <div className="practice-contest__lhs">
                        <div className="practice-contest__points">
                          <span>10</span>
                          <p>Total Points</p>
                        </div>
                      </div>
                      <div className="practice-contest__rhs">
                        <div className="practice-contest__rank-wrap">
                          <div className="practice-contest__label">
                            <FaTrophy className="trophy-icon" />
                            <span>Practice Contests</span>
                          </div>
                          <div className="practice-contest__rank">
                            <span>1</span>
                            <p>Rank</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="practice-contest__qus-number">
                      <ul>
                        <li className="correct">1</li>
                        <li className="current">2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                      </ul>
                    </div>

                    <div className="practice-contest__qus-heading">
                      <span>
                        What caused Konda Readdy to loose his hand?????
                      </span>
                    </div>

                    <div className="practice-contest__progBar">
                      <CircularProgress duration={10} />
                    </div>

                    <Tippy
                      theme="custom"
                      animation="fade"
                      visible={true}
                      content={"This is a highlighted movie!"}
                    >
                      <div class="practice-contest__qus-list ">
                        <div
                          class="practice-contest__qus-item selected wrong highlighted"
                          onClick={() => setViewContest(6)}
                          style={{ border: "none" }}
                        >
                          <span>Bomb</span>
                        </div>
                        <div
                          class="practice-contest__qus-item correct"
                          style={{ border: "none" }}
                        >
                          <span>Axe</span>
                        </div>
                        <div class="practice-contest__qus-item">
                          <span>Bullet</span>
                        </div>
                        <div class="practice-contest__qus-item">
                          <span>None of the above</span>
                        </div>
                      </div>
                    </Tippy>
                    <div className="quiz-overlay"></div>

                    <div className="practice-contest__note">
                      <span>Correct answer will get you 10 points.</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div class="container">
                  <div className="header quiz-header">
                    <div
                      className="head-col-left-fn"
                      onClick={() => {
                        setViewContest(5);
                      }}
                    >
                      <div className="head-col-left-icon">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          className="head-action-btn icon-left-arrow"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="head-col-center-fn">
                      <span className="head-title">Pushpa The Rise</span>
                    </div>
                    <div className="head-col-right-fn"></div>
                  </div>
                  <div class="kudos">
                    <div class="kudos-circle">
                      <img
                        src="https://fanizm-prod.s3.amazonaws.com/upload/profile/thumb/avatar4.png"
                        alt="Logo"
                        class="logo"
                      />
                    </div>
                    <div className="kudos-1">
                      <span>KUDOS!</span>
                    </div>
                    <p>This is your probable winning if there is no tie</p>
                  </div>
                  <div class="contests">
                    <div class="contest-details">
                      <h3>3 Contest(s) Joined</h3>
                      {result.map((result) => (
                        <>
                          <div class="contest">
                            <div className="contest-data">
                              <span>{result.result}</span>
                              <span>{result.resAns}</span>
                            </div>
                            <div className="contest-data">
                              <span>{result.rank}</span>
                              <span>{result.rankAns}</span>
                            </div>
                            <div className="contest-data">
                              <span>{result.wonAns}</span>
                              <span>{result.won}</span>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div class="quiz-points">
                    <h4>CHECK HOW YOU DID!</h4>
                    <p>Quiz Points: 10 pts</p>
                    <a href="#" class="view-rules">
                      View Rules
                    </a>
                  </div>
                  <div class="total-points">
                    <Tippy
                      theme="custom"
                      animation="fade"
                      visible={true}
                      content={"This is a highlighted movie!"}
                      placement="top"
                    >
                      <div
                        className="result-button highlighted"
                        onClick={() => nevigate("/")}
                      >
                        Total Points: <span>10.00</span>
                      </div>
                    </Tippy>
                  </div>
                  <div class="quiz-overlay"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewContest;
