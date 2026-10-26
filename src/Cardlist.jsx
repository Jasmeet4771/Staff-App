
import { useContext } from "react";
import { StaffContext } from "./context/StaffContext";
import Card from "./Card";
import "./Cardlist.css";

function Cardlist(props) {
  const { staff, loading, error } = useContext(StaffContext);

  const searchTerm = (props.searchstaff ?? "").toLowerCase();

  const filteredstaff = staff.filter((member) =>
    (member.name ?? "").toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return <p>Loading staff...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (filteredstaff.length === 0) {
    return <p>No staff found.</p>;
  }

  return (
    <div className="row">
      {filteredstaff.map((member) => (
        <Card
          key={member.firestoreId ?? member.key ?? member.name}
          image={member.image}
          name={member.name}
          position={member.position ?? member.job}
        />
      ))}
    </div>
  );
}

export default Cardlist;
