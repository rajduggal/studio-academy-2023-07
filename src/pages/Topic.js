import { useParams } from "react-router-dom";

const Topic = () => {
  const { detailId } = useParams();
  return (
    <>
      <p>Details of Each Session</p>
      <p>Session: {detailId}</p>
    </>
  );
};

export default Topic;
