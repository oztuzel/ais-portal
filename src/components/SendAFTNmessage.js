import React, { useState } from "react";
import style from "./SendAFTNmessage.module.css";

function SendAFTNMessage() {
  const [aftnAddresses, setAFTNAddresses] = useState(Array(20).fill(""));
  const [message, setMessage] = useState("");

  const handleAFTNAddressChange = (index, value) => {
    if (value.length <= 8) {
      const updatedAddresses = [...aftnAddresses];
      updatedAddresses[index] = value.toUpperCase();
      setAFTNAddresses(updatedAddresses);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value.toUpperCase()); 
  };

  const handleSendClick = () => {
    // Send button click
    console.log("Sending AFTN message:", message);
    console.log("AFTN Addresses:", aftnAddresses);
  };

  return (
    <div className={style.container}>
      <h3>AFTN Addresses</h3>
      {aftnAddresses.map((address, index) => (
        <input
          key={index}
          type="text"
          value={address}
          onChange={(e) => handleAFTNAddressChange(index, e.target.value)}
          className={style.addressInput}
        />
      ))}
      <div className={style.messageSection}>
        <h3>MESSAGE</h3>
        <textarea
          value={message}
          onChange={handleMessageChange}
          className={style.messageInput}
        />
      </div>
      <button onClick={handleSendClick} className={style.sendButton}>
        Send
      </button>
    </div>
  );
}

export default SendAFTNMessage;
