import Card from "./Card";
import Users from "../users.json";

const Grid = () => {
  return (
    <div className="container p-8 grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-6">
      {Users.map((user) => (
        <Card key={user.id} userData={user} />
      ))}
    </div>
  );
};

export default Grid;
