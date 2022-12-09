import { Link } from "react-router-dom";

const Card = ({ userData }) => {
  return (
    <Link to={"/ateliers/" + userData.id}>
      <div className="w-60 h-60 flex justify-center items-center flex-col bg-igray-light rounded-2xl space-y-2 shadow-xl p-4 overflow-hidden">
        <img
          className="shadow w-20 h-20 rounded-full object-cover"
          src={"../assets//" + userData.picture}
          alt=""
        />
        <div className="font-semibold font-pixel text-black">
          {userData.name + " " + userData.lastName}
        </div>
        <div className="font-semibold font-pixel text-black">
          {userData.group}
        </div>
      </div>
    </Link>
  );
};

export default Card;
