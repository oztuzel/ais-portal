import React, { useState } from "react";
import style from "./Messages.module.css";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("inbox");

  const inboxData = [
    {
      id: 1,
      message: "Inbox Message 1",
      createDate: "2023-07-31",
      sender: "Sender 1",
      updateDate: "2023-07-31",
      receiver: "You",
    },
  ];

  const sentData = [
    {
      id: 1,
      message: "Sent Message 1",
      createDate: "2023-07-31",
      sender: "You",
      updateDate: "2023-07-31",
      receiver: "Receiver 1",
    },
  ];

  const renderTableData = () => {
    if (activeTab === "inbox") {
      return inboxData.map((data) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.message}</td>
          <td>{data.createDate}</td>
          <td>{data.sender}</td>
          <td>{data.updateDate}</td>
          <td>{data.receiver}</td>
        </tr>
      ));
    } else if (activeTab === "sent") {
      return sentData.map((data) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.message}</td>
          <td>{data.createDate}</td>
          <td>{data.sender}</td>
          <td>{data.updateDate}</td>
          <td>{data.receiver}</td>
        </tr>
      ));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>Messages</h3>
      </div>
      <div className={style.tabContainer}>
        <div
          className={`${style.tab} ${
            activeTab === "inbox" ? style.active : ""
          }`}
          onClick={() => setActiveTab("inbox")}
        >
          Inbox
        </div>
        <div
          className={`${style.tab} ${activeTab === "sent" ? style.active : ""}`}
          onClick={() => setActiveTab("sent")}
        >
          Sent
        </div>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Create Date</th>
            <th>Sender</th>
            <th>Update Date</th>
            <th>Receiver</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
};

export default Messages;
