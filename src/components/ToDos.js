import { useEffect, useState } from "react";

const ToDos = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (response) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error("Error fetching Data");
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoader(false);
    }
  };

  const addTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify({
            userId: 10000,
            id: 10000,
            title: "Post Data",
            completed: false,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response) {
        await response.json();
        setSuccess(true);
        fetchData();
      } else {
        throw new Error("Error fetching Data");
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      fetchData();
    }, 5000);
  }, []);

  return (
    <>
      <p>Todo Component</p>
      {loader && <div>Data is loading...</div>}
      {!loader &&
        data &&
        data.length > 0 &&
        data.map((node, index) => <p key={`each-${index}`}>{node.title}</p>)}

      <div>
        <button onClick={() => addTodo()}>Add Todo</button>
      </div>
      {success && <p>Posted SuccessFully</p>}
    </>
  );
};

export default ToDos;
