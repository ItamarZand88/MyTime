import { FaRegTrashAlt } from "react-icons/fa";
const style = {
  li: "flex justify-between bg-indigo-100 p-4 my-2 capitalize text-right  md:rounded",
  liComplete:
    "flex justify-between bg-slate-400 p-4 my-2 capitalize text-right md:rounded",
  row: "flex items-center ",
  text: "mr-2 cursor-pointer font-semibold ",
  textComplete: "mr-2 cursor-pointer line-through",
  button: "cursor-pointer flex items-center",
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <button onClick={() => deleteTodo(todo.id)} className={style.button}>
        <FaRegTrashAlt />
      </button>
      <div className={style.row}>
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
      </div>
    </li>
  );
};

export default Todo;
