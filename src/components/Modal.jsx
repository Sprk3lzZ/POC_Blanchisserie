import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import json from "../users.json";

const Modal = ({ open }) => {
  const { id } = useParams();
  let userData = null;
  for (let i = 0; i < json.length; i++) {
    if (json[i]["id"] == id) {
      userData = json[i];
      break;
    }
  }

  const url = new URLSearchParams(window.location.pathname)
    .toString()
    .split("%2F");

  if (!open) return null;
  return (
    <div id="modal" className="overlay">
      <div className="fixed z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ReactPlayer
          url={userData.ateliers[url[2]].video}
          className="w-1/2"
          playing
          controls={false}
        />
      </div>
    </div>
  );
};

export default Modal;
