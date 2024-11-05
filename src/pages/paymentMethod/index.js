import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const nevigate = useNavigate();
  const [paymentOverlay, setPaymentOverlay] = useState(true);
  const [successOverlay, setSuccessOverlay] = useState(false);

  const handleSuccessOverlay = () => {
    setSuccessOverlay(!successOverlay);
    nevigate("/view-contest");
  };
  const handlePaymentOverlay = () => {
    setPaymentOverlay(!paymentOverlay);
    setSuccessOverlay(!successOverlay);
  };
  return (
    <>
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
              <div className="head-col-left-fn"></div>
              <div className="head-col-center-fn">
                <span className="head-title">Select Payment Method</span>
              </div>
              <div className="head-col-right-fn">
                <div className=""></div>
              </div>
            </div>

            <div className="default-header-placeholder-fn"></div>
            <div className="burger-menu-backdrop-fn "></div>

            <div className="mobile-wrap-fn">
              <div className="web-container-fn web-container-fixed trans-web-container pay-method-wrap">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="payable-amt">
                      To Pay
                      <div className="payable-amt-view">
                        <i className="font-style-normal">₹</i>
                        <span>155</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="how-would-you-view"></div>

                <div class="payment-method-container">
                  <div class="payment-card-row">
                    <div class="payment-card  payment-card-cursor">
                      <div class="c-image">
                        <img
                          alt=""
                          class="img-fluid"
                          src="https://fanizm-prod.s3.amazonaws.com/upload/paymentgetway/1717995284.png"
                        />
                      </div>
                      <div class="payment-content">
                        <div class="payments-name">Razorpay </div>
                        <div class="payements-desc">
                          Seamless payments for you
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="overlay">
                  <div class="overlay__wrap overlay__wrap--pay">
                    <div class="overlay__content">
                      <div className="overlay__body">
                        {paymentOverlay && (
                          <Tippy
                            theme="custom"
                            animation="fade"
                            visible={step !== "end" && true}
                            content={"This is a highlighted movie!"}
                            placement="top"
                          >
                            <div
                              className="overlay__pyt-img highlighted"
                              onClick={() => {
                                handlePaymentOverlay();
                              }}
                            >
                              <img src="images/qr.jpg" alt="qr" />
                            </div>
                          </Tippy>
                        )}
                        {successOverlay && (
                          <Tippy
                            theme="custom"
                            animation="fade"
                            visible={step !== "end" && true}
                            content={"This is a highlighted movie!"}
                            placement="top"
                          >
                            <div
                              className="overlay__pyt-img highlighted"
                              onClick={() => {
                                handleSuccessOverlay();
                              }}
                            >
                              <img src="images/success.jpg" alt="qr" />
                            </div>
                          </Tippy>
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
    </>
  );
};

export default PaymentMethod;
