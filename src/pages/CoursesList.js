import { useState, useEffect } from "react";
import axios from "axios";
import HttpService from "../services/httpService";

const Paginator = ({ pageSize, pageNumber, sortDirection, pageChange }) => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {pageNumbers.map((page) => (
        <span
          key={page}
          onClick={() => {
            pageChange(page);
          }}
        >
          {page} |
        </span>
      ))}
    </div>
  );
};

const CoursesList = () => {
  const [data, setData] = useState([]);

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
  };

  return (
    <p>
      <Paginator pageChange={pageChange} />
      {filteredData.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </p>

    // Pagination options: 1: number of records, 2: page number (1-100), 3: parameters/sort
  );
};

export default CoursesList;
