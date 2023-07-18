import { useState, useEffect } from "react";
import HttpService from "../services/httpService";
import Paginator from "../components/Paginator";
import Task from "../components/Task";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentPage } from "../redux/paginatorSlice";

const CoursesList = () => {
  const [data, setData] = useState([]);

  const currentPage = useSelector((state) => state.paginator.currentPage); // State
  const dispatch = useDispatch(); // Actions

  const { currentTaskValue, currentTime } = useSelector(
    (state) => state.currentTask
  );

  const [filteredData, setFilteredData] = useState([]);

  const filterDataForPagination = (records, pageNumber) => {
    let start = pageNumber * 10;
    let newData = records.slice(start, start + 10);
    setFilteredData(newData);
  };

  useEffect(() => {
    HttpService()
      .GET(`posts`)
      .then((res) => {
        setData(res.data);
        filterDataForPagination(res.data, 0);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  const pageChange = (page) => {
    filterDataForPagination(data, page);
    dispatch(updateCurrentPage(page));
  };

  return (
    <p>
      Current page: {currentPage} | Current task: {currentTaskValue} | Time:{" "}
      {currentTime}
      <hr />
      <Paginator pageChange={pageChange} />
      {filteredData.map((task) => (
        <Task task={task} />
      ))}
    </p>

    // Pagination options: 1: number of records, 2: page number (1-100), 3: parameters/sort
  );
};

export default CoursesList;
