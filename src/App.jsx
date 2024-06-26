import { nanoid } from "nanoid";
import { useState } from "react";

const App = () => {

    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("toDoTasks")) || []);

    const [title,setTitle] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        const newToDo = {id : nanoid(),title,completed : false}
        setTasks([...tasks,newToDo]);
        setTitle("");
        localStorage.setItem("toDoTasks",JSON.stringify([...tasks,newToDo]))
    }

    const completeHandler = (index) => {
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        setTasks(copyTasks);
        localStorage.setItem("toDoTasks",JSON.stringify(copyTasks));
    }

    const deleteHandler = (id) => {
        setTasks(tasks.filter(t => t.id != id))
        localStorage.setItem("toDoTasks",JSON.stringify(tasks.filter(t => t.id != id)));
    }

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <div className="mt-[7%] w-[35%] h-[30vh] border rounded-3xl flex justify-around items-center">
                <div className="text-yellow-100">
                    <h1 className="text-3xl font-bold">LETS TODO</h1>
                    <p>Keeps doing things</p>
                </div>
                <div className="text-3xl font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-orange-600">
                    {tasks.filter((t) => t.completed === true).length}/{tasks.length}
                </div>
            </div>
            {/*  */}
            <form onSubmit={submitHandler} className="w-[35%] flex justify-between px-5 my-[2%]">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="write your next task..."
                    className="px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700 "
                    type="text"
                />
                <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
                    <i className="ri-add-fill"></i>
                </button>
            </form>
            {/*  */}

            <ul className="list-none w-[35%] ">
                {tasks.length > 0 ? tasks.map((task,index) =>{
                     return(
                         <li key={task.id} className="mb-5 flex justify-between items-center border rounded-xl p-5">
                     <div className="flex items-center">
                         <div
                         onClick={() => completeHandler(index)}
                             className={ task.completed === false ? `border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600` : `bg-green-600 mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                         ></div>
                         <h1
                             className={ task.completed === false ? ` text-2xl font-extrabold text-yellow-100` : `line-through text-2xl font-extrabold text-yellow-100`}
                         >
                             {task.title}
                         </h1>
                     </div>
                     <div className="flex gap-3 text-2xl text-yellow-100">
                         <i className="ri-file-edit-line"></i>
                         <i onClick={() => deleteHandler(task.id)} className="ri-delete-bin-3-line"></i>
                     </div>
                 </li>)
                 
                }): <h1 className="mt-10 text-orange-600 text-center w-full text-3xl">No Tasks Pending</h1>}
            </ul>
        </div>
    );
};

export default App;
