import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import json from "../users.json";
import Modal from "../components/Modal";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "../components/Logo";
import nl2br from "react-nl2br";

const Lavage = () => {
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

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpenModal(false);
    });
  });

  const sendData = (e) => {
    e.preventDefault();
    const el = document.getElementById("screen");
    let linkUrl = null;

    fetch("/data/config.json")
      .then((responseUrl) => {
        return responseUrl.json();
      })
      .then((resultUrl) => {
        linkUrl =
          resultUrl.api.ogirys.url +
          "?code=" +
          document.getElementById("myInput").value +
          "&usager=" +
          userData.id +
          "&atelier=" +
          url[2];
        fetch(linkUrl, {
          mode: "cors",
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            let arr = Object.keys(result);
            if (arr.includes("errors")) {
              el.className =
                "w-screen min-h-screen flex justify-center items-center bg-red-500 flex-col space-y-28 scroll-smooth";
              setTimeout(() => {
                el.className =
                  "w-screen min-h-screen flex justify-center items-center bg-igray flex-col space-y-28 scroll-smooth";
              }, 250);
            } else {
              el.className =
                "w-screen min-h-screen flex justify-center items-center bg-emerald-500 flex-col space-y-28 scroll-smooth";
              setTimeout(() => {
                el.className =
                  "w-screen min-h-screen flex justify-center items-center bg-igray flex-col space-y-28 scroll-smooth";
              }, 250);
            }
            document.getElementById("myInput").value = "";
          });
      });
  };

  useEffect(() => {
    const panel = document.getElementById("resultPanel");
    if (openModal == true) {
      panel.className = "blur-sm";
    } else {
      panel.className = "";
    }
  }, [openModal]);

  return (
    <>
      <Modal open={openModal} />
      <div className="blur-sm" id="resultPanel">
        <div className="flex justify-center items-center gap-7">
          <img
            className="shadow w-20 h-20 rounded-full object-cover"
            src={"/assets/" + userData.picture}
            alt={userData.group}
          />
          <p>{userData.name + " " + userData.lastName}</p>
          <div className="absolute -top-5 right-28">
            <Logo />
          </div>
        </div>
        <section className="container p-8 grid grid-cols-1">
          <h1 className="text-center text-6xl">
            {userData.ateliers[url[2]].name}
          </h1>
          <p className="text-center mt-5 text-15">
            {nl2br(userData.ateliers[url[2]].instructions)}
          </p>
          <div className="text-center p-3">
            <FontAwesomeIcon
              className="fa-solid fa-user text-[70px] text-indigo-600 hover:text-amber-400"
              onClick={() => setOpenModal(true)}
              icon={faVideo}
            />
          </div>
        </section>

        <div>
          <div>
            <div className="bg-white p-10 rounded-lg shadow w-96">
              <form action="">
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    CODE BAR
                  </label>
                  <input
                    type="text"
                    id="myInput"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    autoFocus
                    onKeyDown={(e) => e.key === "Enter" && sendData(e)}
                  />
                </div>
                <Link to={"../rate/" + url[2] + "/" + userData.id}>
                  <button className="block w-full bg-orange-500 text-white font-bold p-4 rounded-lg">
                    <FontAwesomeIcon
                      className="fa-solid fa-user mr-2"
                      icon={faArrowRightFromBracket}
                    />
                    QUITTER
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lavage;
