import React from "react";
import "../addFund";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { FaArrowLeft } from "react-icons/fa";
const AddFund = () => {
  const nevigate = useNavigate();
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
              <div className="head-col-left-fn">
                <div className="head-col-left-icon">
                  <FaArrowLeft className="head-action-btn icon-left-arrow" />
                </div>
              </div>

              <div className="head-col-center-fn">
                <span className="head-title">Add Funds</span>
              </div>
              <div className="head-col-right-fn">
                <div className=""></div>
                <div className="head-right-balance-fn">
                  <span className="currency_code">₹</span>0
                </div>
              </div>
            </div>
            <div className="default-header-placeholder-fn"></div>
            <div className="burger-menu-backdrop-fn "></div>

            <div className="mobile-wrap-fn">
              <div className="web-container-fn web-container-fixed add-funds-wrapper xwhite-bg">
                <div className="add-funds-header">
                  <div>
                    <div className="position-relative show-currency-icn overlay-fixed-view  form-group">
                      <label for="formBasicText" className="control-label">
                        Enter Amount (₹)
                      </label>
                      <input
                        autocomplete="off"
                        placeholder="0"
                        type="number"
                        id="formBasicText"
                        className="form-control"
                        value="155"
                        fdprocessedid="8zrum"
                      />
                      <span className="forminput-currency">₹</span>
                    </div>
                  </div>
                </div>

                <div className="add-funds-body">
                  <div>
                    <div className="amount-section"></div>
                  </div>
                  <div className="dpst-summary">
                    <div className="dpst-heading">Deposit Summary</div>
                    <div className="dpst-inner">
                      <div className="dpst-amt d-flex">
                        <span className="amt-txt">Deposit Amount</span>
                        <span className="amt-val">₹ 155.00</span>
                      </div>
                      <div className="dpst-gst d-flex">
                        <span className="amt-txt">GST(28%)</span>
                        <span className="amt-val">₹ 33.9</span>
                      </div>
                    </div>
                    <div className="dpst-total d-flex">
                      <span className="inclusive-label">Wallet Deposit</span>
                      <span className="tot-val">₹ 121.09</span>
                    </div>
                  </div>
                  <div className="gst-number-view">
                    <div className="gst-checkbox-view">
                      <div className="checkbox-view ">
                        <i className=""></i>
                      </div>

                      <span>I have GST Number</span>
                    </div>

                    <div className="gst-input-view">
                      <div class="position-relative form-group">
                        <input
                          autocomplete="off"
                          maxlength="15"
                          placeholder="Enter 15 digit GST number"
                          name="gstNumber"
                          type="text"
                          id="gstNumber"
                          className="form-control"
                          value=""
                          fdprocessedid="eceszp"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="promo-code-section">
                    <div className="apply-promocode">Apply Promocode</div>
                    <div className="promocode">
                      <div className="form-group">
                        <input
                          autocomplete="off"
                          placeholder="Type promocode here"
                          type="text"
                          id="formBasicText"
                          className="form-control"
                          value=""
                          fdprocessedid="6fevt"
                        />
                      </div>
                      <div className="btn-apply">Apply</div>
                    </div>
                  </div>
                  <div className="text-center add-fund ">
                    <Tippy
                      theme="custom"
                      animation="fade"
                      visible={step !== "end" && true}
                      content={"This is a highlighted movie!"}
                    >
                      <a
                        className="button button-primary-rounded button-block btn-add-cash"
                        style={{ border: "2px solid #fff" }}
                        onClick={() => {
                          nevigate("/payment-method");
                        }}
                      >
                        Add Cash
                      </a>
                    </Tippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-overlay "></div>
    </>
  );
};

export default AddFund;
