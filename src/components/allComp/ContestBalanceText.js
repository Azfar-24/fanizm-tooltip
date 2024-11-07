import React, { useState } from "react";

function ContestBalanceText() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="amount-subtext">
      {isExpanded ? (
        <>
          Total Balance available for this contest is your Deposit Amount +
          Winnings + 5% of entry fee eligible to use from Bonus Cash Wallet (Max
          ₹100000)
        </>
      ) : (
        <>Total Balance available for this contest is your... </>
      )}
      <span
        className="read-more"
        onClick={handleToggle}
        style={{ color: "#ffffff", cursor: "pointer" }}
      >
        {isExpanded ? " Read Less" : " Read More"}
      </span>
    </div>
  );
}

export default ContestBalanceText;
