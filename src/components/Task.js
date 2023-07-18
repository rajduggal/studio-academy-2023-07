import { useDispatch } from "react-redux";
import { setCurrentTask } from "../redux/currentTaskSlice";

const Task = ({ task }) => {
  const styles = {
    boxShadow: "0 0 5px grey",
    margin: "1rem 0",
    padding: "0.5rem",
  };
  const { id, title } = task;

  const dispatch = useDispatch();
  return (
    <div
      style={styles}
      key={id}
      onClick={() => {
        dispatch(setCurrentTask(title));
      }}
    >
      {title}
    </div>
  );
};

export default Task;
