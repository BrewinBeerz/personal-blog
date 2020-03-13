import React from "react";
import "./modal.css";

export default function Modal(props) {
  const { handleClose, show, src } = props;

  return (
    <div>
      <div
        className="photo-modal-wrapper"
        onClick={handleClose}
        style={{
          transform: show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: show ? "1" : "0"
        }}
      >
          <img src={src}></img>
      </div>
    </div>
  );
}
