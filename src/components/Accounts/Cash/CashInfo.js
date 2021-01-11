import React from "react";

const CashInfo = ({ cashInfo }) => {
  return (
    <div
      style={{
        color: "black",
      }}
    >
      {cashInfo.amount}
    </div>
  );
};

export default CashInfo;
