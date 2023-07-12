import { useContext } from "react";
import { ContextData } from "./../App";

const DetailsComponent = ({ activeSection, listOfCourses }) => {
  const data = useContext(ContextData);
  console.log(data, data);
  return (
    <div className="details">
      Details component of page {activeSection}
      <hr />
      {/* List of navigation items */}
      {data}
    </div>
  );
};

export default DetailsComponent;
