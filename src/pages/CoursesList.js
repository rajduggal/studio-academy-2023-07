import axios from "axios";
import { useState, useEffect } from "react";
import HttpService from "../services/httpService";

const CoursesList = () => {
  useEffect(() => {
    HttpService()
      .GET(`posts`)
      .then((res) => {
        debugger;
      })
      .catch((err) => {
        debugger;
      });
  });

  return <p>CoursesList Page</p>;
};

export default CoursesList;
