import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div
            className={"status-" + (props.online ? "online" : "offline")}
          ></div>
          <div className="status-text">
            {props.online ? "online" : "offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
