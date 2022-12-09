import { Link, useParams } from "react-router-dom";
import json from "../users.json";
import Logo from "../components/Logo";

const Rate = () => {
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

  if (!Object.keys(userData.ateliers[url[2]]).includes("question")) {
    return (
      <div className="w-3/4 flex justify-center items-center flex-col bg-igray-light">
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
        <section className="relative container p-8">
          <h1 className="text-center text-6xl">EVALUATION</h1>
          <p className="text-center mt-5 text-xl">
            Comment avez vous trouvé votre atelier ?
          </p>
        </section>
        <Link to={"../"}>
          <section className="container p-8 min-w-large grid grid-cols-3 place-items-center mt-10">
            <div className="m-5 rounded-lg overflow-hidden">
              <img className="h-28 w-28" src="/assets/red.png" alt="red" />
            </div>
            <div className="m-5 rounded-lg overflow-hidden">
              <img
                className="h-28 w-28"
                src="/assets/orange.png"
                alt="orange"
              />
            </div>
            <div className="m-5 rounded-lg overflow-hidden">
              <img className="h-28 w-28" src="/assets/green.png" alt="green" />
            </div>
          </section>
        </Link>
      </div>
    );
  }
  return (
    <div className="w-3/4 flex justify-center items-center flex-col bg-igray-light">
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
      <section className="relative container p-8">
        <h1 className="text-center text-6xl">EVALUATION</h1>
        <p className="text-center mt-5 text-xl">
          {userData.ateliers[url[2]].question}
        </p>
      </section>
      <Link to={"../"}>
        <section className="container p-8 min-w-large grid grid-cols-2 place-items-center mt-38">
          <div className="m-5 rounded-lg overflow-hidden">
            <img className="h-28 w-28" src="/assets/tick.png" alt="red" />
          </div>
          <div className="m-5 rounded-lg overflow-hidden">
            <img className="h-28 w-28" src="/assets/cross.png" alt="orange" />
          </div>
        </section>
      </Link>
    </div>
  );
};

export default Rate;
