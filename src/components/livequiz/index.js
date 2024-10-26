import React, { useState } from "react";
import "./livequiz.css";
import "../../App.css";
import { useLocation } from "react-router-dom";
import Overlay from "../allComp/Overlay";
import ViewOverlay from "../allComp/ViewOverlay";
import Tippy from "@tippyjs/react";
import { FaArrowLeft, FaQrcode } from "react-icons/fa";

const LiveQuiz = () => {
  const location = useLocation();
  const quizData = location.state;
  const { title, time, imageUrl, coverImg } = quizData;

  const [activeTab, setActiveTab] = useState(1);

  const contestTab = [
    { id: 1, label: "All Contest" },
    { id: 2, label: "My Contest" },
  ];
  const upcomingContest = [
    {
      id: 2,
      contestType: "HEAD TO HEAD",
      contestDes: "Head 2 Head",
      type: "Fast filling!",
      heading: "Practice Contest",
      entry: "Entry Ticket",
      buttonType: "₹ 55",
      left: 1,
      slots: 2,
    },
  ];
  const myContest = [
    { id: 1, label: "All Contest" },
    { id: 2, label: "My Contest" },
  ];

  const [joinContestOverlay, setJoinContestOverlay] = useState(false);
  const [viewContestOverlay, setViewContestOverlay] = useState(false);

  const handleJoinContestOverlay = () => {
    setJoinContestOverlay(!joinContestOverlay);
  };

  const handleViewContestOverlay = () => {
    setViewContestOverlay(!viewContestOverlay);
  };

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
            <div className="header quiz-header">
              <div className="head-col-left-fn">
                <div className="head-col-left-icon">
                  <FaArrowLeft className="head-action-btn icon-left-arrow" />
                </div>
              </div>
              <div className="head-col-center-fn">
                <div className="head-logo-fn">
                  <svg
                    width="95.3178932px"
                    height="51.1884258px"
                    viewBox="0 0 95.3178932 51.1884258"
                    version="1.1"
                    className="svg-icon"
                  >
                    <defs>
                      <path
                        d="M4.64808273,10.3327608 L5.97525406,12.1201525 L1.19332886,30.5210924 L3.06588364,30.287816 L-7.26092108e-14,41.7819796 L8.55964279,24.0783777 L7.14979935,24.2538919 L8.03351974,20.8523684 L8.0389595,20.8519182 L11.8624229,20.3756266 L13.064579,15.7529192 L9.23432541,16.2298899 L9.77017593,14.1673212 L16.6235161,13.3134851 L17.8259087,8.69099522 C13.4333,9.23840427 9.04069138,9.7853632 4.64808273,10.3327608 M19.0042839,8.54424 L20.5194435,9.9907732 L12.7762718,26.1531687 L17.2488289,25.5960283 C18.9567299,22.0626955 20.6283836,18.5211954 22.3229256,14.9842424 C22.2182884,18.3237085 22.1292839,21.6618204 22.0343895,24.9997072 L26.5069313,24.4425592 L26.9879799,7.5495348 L19.0042839,8.54424 Z M40.5265999,5.86292744 L38.2420921,14.6603746 L36.7031288,6.33921528 C34.5950432,6.60192966 32.4869652,6.8644228 30.3786354,7.127141 C30.8207436,7.72324085 31.2641792,8.31798267 31.7060509,8.91431141 L27.7093391,24.2928553 L32.1823463,23.7354784 L34.4666405,14.9382639 L36.0057945,23.2591906 L40.4785957,22.7018213 L44.9993935,5.30578327 L40.5265999,5.86292744 Z M46.4663048,5.12300968 C46.9088478,5.71956348 47.3516197,6.31566334 47.7925835,6.91379642 L43.7969856,22.2884912 L48.2700005,21.7313471 L52.7907982,4.33485126 C50.6827202,4.59756947 48.574398,4.86029148 46.4663048,5.12300968 M55.6283836,3.98154163 L54.4257698,8.60403156 L61.7603645,7.69040012 L52.3099785,16.7553225 L51.107357,21.3778086 L63.8766212,19.7867823 L65.0787773,15.1642923 L57.7444115,16.078145 L67.195034,7.01322651 L68.3974037,2.39073658 L55.6283836,3.98154163 Z M83.1141701,0.557367325 L77.006443,9.83088017 L75.4675026,1.50995255 C73.3591805,1.77244186 71.2508583,2.0351572 69.1427803,2.29787922 L70.4740334,4.06964207 L66.47369,19.4633608 L70.9464607,18.9062204 L73.2309914,10.1090059 L74.7699318,18.4297075 C76.8068886,15.3373232 78.8438911,12.2444963 80.8808327,9.15166187 L78.5934029,17.9534121 L83.0663795,17.3962679 L87.5871773,-4.68340326e-14 L83.1141701,0.557367325 Z"
                        id="path-1"
                      ></path>
                    </defs>
                    <g
                      id="rr"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="02-Home-Screen-–-83"
                        transform="translate(-137.457737, -14.918713)"
                      >
                        <g
                          id="Group"
                          transform="translate(137.457737, 14.918713)"
                        >
                          <path
                            d="M0.443,46.7842586 L2.51938931,39.0000903 L1.41120831,36.4320209 L6.35915295,17.3919456 L5.17850415,15.8015945 L4.43156735,14.1043441 L3.60195844,12.2195613 L5.87697141,11.9360072 L93.8996956,0.97 L95.3178932,4.07551643 L89.6656105,25.8245341 L24.0457718,33.9996097 L23.7882568,33.4143817 L23.4711944,34.074805 L13.4650108,35.2758357 L5.77098004,51.1884258 L1.59058301,49.6361186 L0.443,46.7842586 Z"
                            id="Path-1433"
                            fill="#E02020"
                            className="svg-bgpath mega"
                          ></path>
                          <path
                            d="M93.4566841,-3.30694643e-13 L5.43419647,10.9662352 L3.15919113,11.2495632 L3.98879242,13.1345682 L4.73549652,14.8318233 L5.91637421,16.4219475 L0.96844101,35.4620209 L2.07661057,38.0300941 L6.7893496e-14,45.8144836 L1.14780807,48.6663399 L5.32821274,50.2186508 L13.0220184,34.3060608 L23.0281792,33.1050301 L23.3452568,32.4446068 L23.602993,33.0298386 L89.2228584,24.8545341 L94.8751411,3.10551548 L93.4566841,-3.30694643e-13 Z"
                            id="Path-1434"
                            fill="#E02020"
                            fill-rule="nonzero"
                            className="svg-bgpath mega"
                          ></path>
                          <path
                            d="M24.473898,31.4958994 L23.726965,29.7988741 L24.6138669,26.5337011 L22.0888272,31.7930491 L12.0851346,32.9938509 L4.61464508,48.4446489 L2.20194061,47.5486834 L1.455,45.8516542 L5.05854614,36.8395006 L3.20049866,37.070965 L2.45355804,35.3739397 L8.33641632,17.3079702 L5.96695526,14.1166174 L5.22002228,12.4193651 L8.37423523,13.8165285 L41.0059262,7.96107407 L41.7528592,9.65810032 L42.3754407,13.023844 L43.2994901,9.46558972 L79.7702618,3.13181134 L80.5172101,4.82883664 L81.6593457,11.0045359 L86.1926099,4.12176152 L92.6350766,1.529 L93.3820248,3.22625275 L88.0950604,23.5697329 L38.7578641,29.7164347 L38.0111447,28.0194132 L38.1354886,26.3509199 L37.2114392,29.9091723 L24.473898,31.4958994 Z"
                            id="Path-1435"
                            fill="#0C1239"
                          ></path>
                          <path
                            d="M23.7269688,29.7978755 L23.867159,24.8356677 L21.341898,30.0950176 L11.3382092,31.2955982 L3.86770828,46.7466136 L1.455,45.8506595 L4.31161316,35.1414806 L2.45355804,35.3729411 L7.58947952,15.6099426 L5.22002609,12.4185897 L7.62730606,12.1185027 C18.7536641,10.7324353 29.8798009,9.34659398 41.0059148,7.96007455 L41.6285191,11.3258182 L42.5525685,7.7675649 L79.7702657,3.13080895 L80.9124165,9.30650533 L85.4456654,2.42373383 L92.6351109,1.528 L87.348116,21.8716995 L38.0111562,28.018407 L37.3885594,24.652671 L36.4645253,28.2109157 L23.7269688,29.7978755 Z"
                            id="Path-1436"
                            fill="#0B154A"
                          ></path>
                          <path
                            d="M30.142224,10.7395348 L29.6611754,27.6325592 L25.1883895,28.1897072 C25.2835052,24.8518204 25.3725097,21.5139336 25.4769256,18.1742424 C23.7826125,21.7111954 22.1107299,25.2526955 20.4030654,28.7860283 L15.9302718,29.3431687 L23.6734435,13.1807732 L22.1585128,11.73424 L30.142224,10.7395348 Z M58.7823836,7.17154163 L71.5514037,5.58073658 L70.3492629,10.2032265 L60.8986404,19.268145 L68.2330062,18.3545212 L67.0306212,22.9770073 L54.2615935,24.5678086 L55.4639785,19.9453225 L64.9146087,10.8804001 L57.5799987,11.7940316 L58.7823836,7.17154163 Z M34.8600509,12.1043114 L34.8600509,12.1043114 C34.4184157,11.5079827 33.9747436,10.9132409 33.5328719,10.317141 C35.6409652,10.0544228 37.7490432,9.79192966 39.8571288,9.52921528 L41.3963058,17.8501458 L43.6808288,9.05292744 L48.1535995,8.49578327 L43.6325957,25.892054 L39.1597945,26.4491906 L37.6208617,18.1282639 L35.3363463,26.9254784 L30.8635528,27.4828553 L34.8600509,12.1043114 Z M50.9468123,10.1037964 C50.5058486,9.50588459 50.0630767,8.90956348 49.6205413,8.31300968 C51.7286193,8.05029148 53.8367202,7.78756947 55.9447982,7.52508396 L51.4240005,24.9213471 L46.9512221,25.4784912 L50.9468123,10.1037964 Z M84.0348327,12.3416619 L81.7476012,21.1434121 L86.2203795,20.5862679 L90.7411773,3.19 L86.268399,3.74714035 L80.160443,13.0208802 L78.6215026,4.69995255 C76.5131805,4.96244186 74.4050872,5.2251572 72.2969939,5.48787922 L73.6282622,7.25964207 L69.62769,22.6533608 L74.1004607,22.0962204 L76.3849914,13.2990059 L77.9241454,21.6199288 C79.9611175,18.5270981 81.9981048,15.4344963 84.0348327,12.3416619 M20.9801299,11.8809952 L19.777745,16.503714 L12.9244124,17.3573212 L12.3883254,19.4201111 L16.2188155,18.9429192 L15.0164229,23.5654053 L11.1929595,24.0419182 L11.1877486,24.0421509 L10.3040206,27.4438919 L11.713864,27.2683777 L3.154,44.9719796 L6.21988364,33.477816 L4.34755774,33.7110924 L9.12949057,15.3101525 L7.80231161,13.5227608 C12.1949126,12.9755806 16.5875289,12.4281754 20.9801299,11.8809952"
                            id="Path-1437"
                            fill="#FEFEFE"
                            fill-rule="nonzero"
                          ></path>
                          <g
                            id="Group-570"
                            transform="translate(3.154000, 3.191000)"
                          >
                            <mask id="mask-2" fill="white"></mask>
                            <g id="Path-1439" fill-rule="nonzero"></g>
                            <path
                              d="M-10.437,24.0876404 C24.4991305,10.4697663 54.024174,27.1555649 92.0533564,8.864 L95.5746959,37.1078431 L-6.91566535,52.3314759 C-8.08951923,42.9168717 -9.26314636,33.5022523 -10.437,24.0876404"
                              id="Path-1438"
                              fill="#E6E7E8"
                              mask="url(#mask-2)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="head-subtitle-fn">
                  Win Prizes |<span className="timer">20 Oct - 01:00 PM</span>
                </span>
              </div>
              <div className="head-col-right-fn">
                <div className="head-col-right-icon">
                  <FaQrcode className="head-action-btn icon-qr-fn" />
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="burger-menu-backdrop-fn "></div>
            {/* main sections */}
            <div className="mobile-wrap-fn">
              <div className="web-container-fn contest-listing-web-conatiner header-margin minus-header-height bg-white contest-listing-new-fn ML-contest-listing LQ-contest-list-view with-detail-screen">
                <div className="webcontainer-inner-fn">
                  <div className="ptr-fn">
                    <div className="ptr__pull-down-fn">
                      <div className="ptr__loader-fn ptr__pull-down--loading-fn">
                        <div className="lds-ellipsis-fn">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="ptr__pull-down--pull-more-fn"></div>
                    </div>
                    <div className="ptr__children-fn">
                      <div className="container-tab-wrap-fn">
                        <div className="lqquizdetails-fn">
                          <div className="quiz-banner-fn">
                            {imageUrl && (
                              <img
                                src={coverImg ? coverImg : imageUrl}
                                alt="Quiz"
                                className="quiz-image-fn"
                              />
                            )}

                            <div className="img-border-fn"></div>
                          </div>
                          <div className="quiz-subtitle-fn">
                            <span className="rules-modal-trigger">
                              <i className="icon-rules-edit"></i>Rules
                            </span>
                            {title}
                            <span className="more-detals-trigger-fn  ">
                              Read more..
                            </span>
                          </div>
                          <div className="quiz-content-box-fn sm">
                            <div className="quiz-content-heading-fn">
                              Quiz Available in -
                              <p>
                                <span>English</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-tab-wrap-fn">
                        <div className="tab-group-fn live-quiz-tab-fn">
                          <ul>
                            {contestTab.map((tab) => (
                              <li
                                class={`${
                                  activeTab === tab.id ? "active" : ""
                                }`}
                                onClick={() => {
                                  setActiveTab(tab.id);
                                }}
                              >
                                <span>{tab.label} </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 w-100">
                            <div className="infinite-scroll-component__outerdiv-fn">
                              <div
                                className="infinite-scroll-component-fn"
                                style={{ height: "auto", overflow: "auto" }}
                              >
                                {activeTab === 1 && (
                                  <div className="contest-list-wrapper-fn xmt20 mb20">
                                    {upcomingContest.map((contest, i) => (
                                      <div className="contest-listing-card is-mega-contest">
                                        <div className="rookie-contest-view-fn">
                                          <div className="contest-listing-card-header-fn">
                                            <img
                                              src="https://fanizm-prod.s3.amazonaws.com/assets/img/1711275142.jpeg"
                                              alt=""
                                              className="contest-img"
                                            />
                                            <div className="contest-right-fn">
                                              <div className="contest-name-heading">
                                                {contest.contestType}
                                              </div>
                                              <div className="contest-name-heading-description">
                                                {contest.contestDes}{" "}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="contest-list-fn contest-listing-list xquiz-contest-card contest-card-body">
                                            <div className="contest-list-header-fn">
                                              <div className="contest-heading-fn">
                                                <h3 className="win-type">
                                                  <span className="position-relative">
                                                    <span>{contest.type}</span>
                                                  </span>
                                                  <i className="icon-share-arrow"></i>
                                                </h3>
                                                <div className="max-prize-pool-fn pool-with-prize-r">
                                                  <div className="prize-pool-l-fn">
                                                    {contest.heading}
                                                  </div>
                                                  <Tippy
                                                    key={i} // Unique id for Tippy
                                                    theme="custom"
                                                    animation="fade"
                                                    visible={true}
                                                    content={
                                                      "This is a highlighted movie!"
                                                    }
                                                    disabled={
                                                      i === 1 ||
                                                      joinContestOverlay
                                                    } // Disable tooltip when not highlighted
                                                  >
                                                    <div
                                                      className={`display-table-cell v-mid position-relative entry-criteria `}
                                                      style={{
                                                        zIndex:
                                                          i === 0
                                                            ? "100"
                                                            : null,
                                                      }}
                                                    >
                                                      <span className="entry-txt">
                                                        {contest.entry}{" "}
                                                      </span>{" "}
                                                      <button
                                                        type="button"
                                                        className={`white-base btnStyle btn-rounded btn btn-primary ${
                                                          i === 0 &&
                                                          !joinContestOverlay
                                                            ? "highlighted"
                                                            : ""
                                                        }`}
                                                        onClick={() =>
                                                          handleJoinContestOverlay()
                                                        }
                                                      >
                                                        {contest.buttonType}
                                                      </button>
                                                    </div>
                                                  </Tippy>
                                                </div>
                                              </div>
                                              <div className="display-table d-flex top-btm-10px">
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
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {i === 0 && !joinContestOverlay ? (
                                          <div className="quiz-overlay" />
                                        ) : null}
                                      </div>
                                    ))}

                                    <div className="text-center show-more-contest">
                                      More contest
                                      <i className="icon-arrow-down"></i>
                                    </div>
                                  </div>
                                )}
                                {activeTab === 2 && (
                                  <div className="contest-list-wrapper-fn xmt20 mb20">
                                    <div className="contest-listing-card is-mega-contest">
                                      <div className="rookie-contest-view-fn">
                                        <div className="contest-listing-card-header-fn">
                                          <img
                                            src="https://fanizm-prod.s3.amazonaws.com/assets/img/1711275142.jpeg"
                                            alt=""
                                            className="contest-img"
                                          />
                                          <div className="contest-right-fn">
                                            <div className="contest-name-heading">
                                              HEAD TO HEAD
                                            </div>
                                            <div className="contest-name-heading-description">
                                              head 2 Head
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="contest-list-fn contest-listing-list xquiz-contest-card contest-card-body">
                                          <div className="contest-list-header-fn">
                                            <div className="contest-heading-fn">
                                              <div className="featured-icon-wrap">
                                                <span className="featured-icon new-featured-icon gau-feat">
                                                  <i className="icon-checked"></i>{" "}
                                                  guaranteed
                                                </span>
                                              </div>
                                              <h3 className="win-type">
                                                <span className="position-relative">
                                                  <span>Fast Filling..</span>
                                                </span>
                                                <i className="icon-share-arrow"></i>
                                              </h3>
                                              <div className="max-prize-pool-fn pool-with-prize-r">
                                                <div className="prize-pool-l-fn">
                                                 
                                                  Practise Contest
                                                </div>
                                                <div className="display-table-cell v-mid position-relative entry-criteria">
                                                  <button
                                                    type="button"
                                                    className="white-base btnStyle btn-rounded    btn btn-primary"
                                                    onClick={() =>
                                                      handleViewContestOverlay()
                                                    }
                                                  >
                                                    View
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="display-table d-flex top-btm-10px">
                                              <div className="progress-bar-default-fn display-table-cell v-mid">
                                                <div className="progress-fn">
                                                  <div
                                                    role="progressbar"
                                                    className="progress-bar"
                                                    aria-valuenow={250}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "100%" }}
                                                  ></div>
                                                </div>

                                                <div className="progress-bar-value-fn">
                                                  <span className="total-entries">
                                                    5 left
                                                  </span>
                                                  <span className="min-entries">
                                                    10 Slots
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
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
        </div>
      </div>

      {joinContestOverlay && (
        <Overlay
          handleJoinContestOverlay={handleJoinContestOverlay}
          // handleViewContestOverlay={handleViewContestOverlay}
          quizData={quizData}
        />
      )}
      {/* 
      {viewContestOverlay && (
        <ViewOverlay
          handleJoinContestOverlay={handleJoinContestOverlay}
          handleViewContestOverlay={handleViewContestOverlay}
          setActiveTab={setActiveTab}
        />
      )} */}
    </>
  );
};

export default LiveQuiz;
