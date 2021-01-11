import React from "react";
import CashInfo from "./CashInfo";

const CashInfoList = ({ cashInfoList, openingBlc, closingBlc }) => {
  return (
    <ul>
      {cashInfoList.map((cashInfo) => {
        return (
          <li key={cashInfo.id}>
            <CashInfo cashInfo={cashInfo}></CashInfo>
          </li>
        );
      })}
    </ul>
  );
};

export default CashInfoList;
