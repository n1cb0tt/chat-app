import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/50.jpg"
        alt="Lori Hunter"
      />
      <div>
        <div className="name">Lori Hunter</div>
        <div className="status">
          <div className="status-online"></div>
          <div className="status-text">online</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
