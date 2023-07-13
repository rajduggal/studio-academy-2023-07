import {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useMemo,
  useState,
} from "react";
import { ContextData } from "./../App";

const DetailsComponent = ({ activeSection, listOfCourses }) => {
  // const initialState = {
  //   name: "Rajan",
  //   counter: 0,
  //   city: "Gurgaon",
  // };

  // const changeFactor = useRef(1); // use some data value, which is not required in rendering, use to manipulate DOM elements.

  // const inputRef = useRef(null);

  // // User can add a task
  // // Each task can have details -> task desc, assignee, priority, eta, timerequired (hr)
  // // multiple tasks at the same time
  // // save all tasks

  // const calculateDiscount = (price) => {
  //   // api openration, heavy calcudation, etc.
  //   for (let i = 0; i < 1000; i++) {
  //     //
  //   }
  //   return price * 100;
  // };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "increment":
  //       return {
  //         ...state,
  //         counter: parseInt(state.counter) + parseInt(state.changeFactor),
  //       };
  //     case "decrement":
  //       return { ...state, counter: state.counter - state.changeFactor };
  //     case "update_factor":
  //       return { ...state, changeFactor: action.changeFactor };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   console.log("redering happens");
  // });

  // const productDiscount = useMemo(() => {
  //   return calculateDiscount(state.changeFactor);
  // }, [state.changeFactor]);

  // const updateCounter = (type) => {
  //   dispatch({
  //     type: type,
  //   });
  // };

  // const updateChangeFactor = (factor) => {
  //   dispatch({
  //     type: "update_factor",
  //     changeFactor: factor,
  //   });
  // };

  // const data = useContext(ContextData);

  const [taskList, setTaskList] = useState([]);

  const [taskForm, setFormData] = useState({});

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...taskForm,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setTaskList((prevList) => [...prevList, taskForm]);
    console.log(taskForm);
  };

  const filterList = (index) => {
    let tasks = taskList;
    tasks = tasks.filter((x, i) => i !== index);
    setTaskList(tasks);
  };

  return (
    <div className="details">
      {/* Details component of page {activeSection}
      <hr /> */}
      {/* {state.name} | {state.counter} | {state.city} | {state.changeFactor} |
      {productDiscount}
      <input
        ref={inputRef}
        defaultValue={state.changeFactor}
        type="number"
        onChange={(e) => {
          updateChangeFactor(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          updateCounter("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          updateCounter("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button> */}
      <div>
        {taskList.map((task, index) => {
          return (
            <div key={index}>
              {task.title} | {task.assignee} | {task.eta}{" "}
              <button onClick={() => filterList(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <form>
          {/* task desc, assignee, priority, eta, timerequired (hr) */}
          <input
            placeholder="title"
            name="title"
            onChange={handleFormChange}
          ></input>
          <input
            placeholder="assignee"
            name="assignee"
            onChange={handleFormChange}
          ></input>
          <input
            placeholder="priority"
            name="priority"
            onChange={handleFormChange}
          ></input>
          <input
            placeholder="eta"
            name="eta"
            onChange={handleFormChange}
          ></input>
          <input
            placeholder="timerequired"
            name="timerequired"
            onChange={handleFormChange}
          ></input>
          <button type="submit" onClick={formSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsComponent;
