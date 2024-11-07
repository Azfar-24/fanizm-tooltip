// Overlay.js
import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const Overlay = ({ handleJoinContestOverlay, quizData }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Stop body scroll when component mounts
    document.body.style.overflow = "hidden";
    // Restore body scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="overlay">
      <div className="overlay__wrap">
        <div className="overlay__content">
          <div className="overlay__header">
            <button
              type="button"
              className="close"
              onClick={() => {
                handleJoinContestOverlay();
              }}
            >
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close</span>
            </button>

            <div className="overlay__header-img">
              <div className="wrap">
                <img
                  src="https://fanizm-prod.s3.amazonaws.com/assets/img/Confirmation.svg"
                  alt="Confirmation"
                />
              </div>
            </div>
            <div className="overlay__header-confirm">Confirmation</div>
          </div>

          <div className="overlay__body">
            <div className="mt20 row">
              <div className="col-xs-12">
                <div className="confirm-quiz-heading">
                  <div className="quiz-name">{quizData.title}</div>
                  <div className="winning-amt">
                    <span>Mega</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="fee-container">
                  <div className="lable-text">Current Balance</div>
                  <div className="payable-amount-value">
                    <span>₹0.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 row">
              <div className="p-0 col-xs-12">
                <div className="amount-subtext">
                  Total Balance available for this contest is your Deposit
                  Amount + Winnings + 5% of entry fee eligible to use from Bonus
                  Cash Wallet (Max ₹100000)
                </div>
              </div>
            </div>
            {/* <div className="p-0 row">
              <div className="col-xs-12">
                <div className="fee-container">
                  <div className="lable-text">Joining Amount</div>
                  <div className="payable-amount-value">
                    <span className="confirmation">₹ 50</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 row">
              <div className="p-0 col-xs-12">
                <div className="add-amount-options">
                  <a className="amount-option">
                    <span>+</span> ₹ 100
                  </a>
                  <a className="amount-option">
                    <span>+</span> ₹ 200
                  </a>
                  <a className="amount-option">
                    <span>+</span> ₹ 500
                  </a>
                </div>
              </div>
            </div> */}
            <div className="p-0 row">
              <div className="p-0 col-xs-12">
                <div className="amount-subtext amount-subtext-font10 mb-0">
                  By joining this contest, you accept Fanizm T&amp;C. I also
                  agree to be contacted by Fanizm and their partners.
                  <a
                    className="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terms-condition"
                  >
                    Go to T&amp;C
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div
            className="overlay__footer dual-btn-footer modal-footer "
            style={{
              display: "flex",
              flexDirection: "column",
              zIndex: 10000000,
            }}
          >
            <h4>Language</h4>
            <div
              style={{
                maxWidth: "260px",
                width: "100%",
                height: "70%",
              }}
            >
              <Dropdown
                languages={[
                  "Hindi",
                  "English",
                  "Telugu",
                  "Bengali",
                  "Tamil",
                  "Kannada",
                  "Malayalam",
                ]}
                type={"English"}
                setData={setData}
                data={data}
                setOpen={setOpen}
              />
            </div>
            <div
              style={{
                maxWidth: "260px",
                width: "100%",
                height: "70%",
                marginBottom: "20px",
              }}
            >
              <Dropdown
                type={"Play Quiz In"}
                languages={["हिंदी", "English"]}
                // setViewContest={setViewContest}
                setData={setData}
                data={data}
                setOpen={setOpen}
              />
            </div>
            <Tippy
              theme="custom"
              animation="fade"
              visible={!localStorage.getItem("skipClicked") && !open}
              content={
                "You’re locked in! Chill out and get in the zone. It’s about to get real!"
              }
              placement="bottom"
            >
              <a
                className="joinContestConfirm single-text highlighted"
                onClick={() => {
                  // navigate("/add-fund");
                  data.length > 1 && navigate("/view-contest");
                }}
                style={{ zIndex: 10 }}
              >
                Join Contest
              </a>
            </Tippy>
          </div>
        </div>
        {!localStorage.getItem("skipClicked") ? (
          <div className="quiz-overlay" />
        ) : null}
      </div>
    </div>
  );
};

export default Overlay;
