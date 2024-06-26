import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //the value added to interval to stop the interval;
   const value =  setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    },n*1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return ()=>{
        clearInterval(value)
        //above mentioned value is passed inside the clear interval
        //and this return function is used to unmount/destroy the component
    }
  }, [n]);

  return { todos, loading };
}
function DataFetchingHooks() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default DataFetchingHooks;
