import { Link, useParams } from "react-router-dom";
import json from "../users.json";
import Logo from "../components/Logo";
import nl2br from "react-nl2br";

const Ateliers = () => {
  const { id } = useParams();
  let userData = null;
  for (let i = 0; i < json.length; i++) {
    if (json[i]["id"] == id) {
      userData = json[i];
      break;
    }
  }
  return (
    <div className="w-3/4 flex justify-center items-center flex-col bg-igray-light">
      <div className="container p-8 min-w-large grid grid-cols-3 place-items-center mt-10">
        <img
          className="shadow w-20 h-20 rounded-full object-cover"
          src={"/assets/" + userData.picture}
          alt={userData.group}
        />
        <p className=" text-3xl">{"Bonjour " + userData.name + " !"}</p>
        <div className="sticky -top-5 right-28">
          <Logo />
        </div>
      </div>
      <section className="relative container p-8 -mt-20">
        <h1 className="text-center text-6xl">ATELIERS</h1>
      </section>
      <section className="container p-8 grid grid-cols-3 -mt-10">
        <Link to={"/ateliers/1/" + userData.id}>
          <div className="m-5 shadow-lg rounded-3xl overflow-hidden h-500">
            <img className="" src="../assets/lavage.jpg" alt="lavage" />
            <div className="p-8">
              <h2 className="text-blue-800 text-xl my-3">LAVAGE</h2>
              <p className="text-gray-800 text-sm">
                {nl2br(userData.ateliers[1].description)}
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/ateliers/2/" + userData.id}>
          <div className="m-5 shadow-lg rounded-3xl overflow-hidden h-500">
            <img className="" src="../assets/sechage.jpg" alt="sechage" />
            <div className="p-8">
              <h2 className="text-blue-800 text-xl my-3">SECHAGE</h2>
              <p className="text-gray-800 text-sm">
                {nl2br(userData.ateliers[2].description)}
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/ateliers/3/" + userData.id}>
          <div className="m-5 shadow-lg rounded-3xl overflow-hidden h-500">
            <img className="" src="../assets/repassage.jpg" alt="repassage" />
            <div className="p-8">
              <h2 className="text-blue-800 text-xl my-3">REPASSAGE</h2>
              <p className="text-gray-800 text-sm">
                {nl2br(userData.ateliers[3].description)}
              </p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Ateliers;
