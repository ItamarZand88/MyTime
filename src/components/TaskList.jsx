import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Card, Title } from "@tremor/react";

const style = {
  bg: "h-screen w-screen p-4 bg-gradient-to-r from-[#9AA2A4] to-[#DCDFE0]",
  container:
    "bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4",
  login:
    "bg-slate-300 flex mt-80 font-bold rounded-md shadow-xl p-4 m-auto bg-white-700 text-blue hover:bg-blue-100 hover:text-white-700",
  logout:
    "bg-slate-300 flex rounded-md shadow-xl p-2 bg-white-700 text-blue hover:bg-blue-100 hover:text-white-700",
  heading: "text-3xl font-bold text-center text-gray-800 p-2",
  form: "flex flex-row-reverse justify-between ",
  input: "border p-2 w-full text-base text-right md:rounded",
  button: " p-1 mr-2 bg-indigo-500 text-slate-100 md:rounded",
  count: "text-center p-2",
  rtl: "direction: rtl;",
  appContainer: "flex h-screen",
  mainContentContainer: "flex-1 flex justify-center items-center",
  title: "text-center mb-4", // This will align the text to the right
};

function TaskList({ user }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("please enter a task");
      return;
    }
    await addDoc(collection(db, "users", user.uid, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  useEffect(() => {
    const q = query(collection(db, "users", user.uid, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => {
      unsubscribe();
    };
  }, [user, db]);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "users", user.uid, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "users", user.uid, "todos", id));
  };

  return (
    <Card className="max-w-full">
      <Title className={style.title}>המשימות שלי</Title>
      <div>
        <form onSubmit={createTodo} className={style.form}>
          <input
            className={style.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="הוסף משימה"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default TaskList;
