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

    console.log(tasks);

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <div className="mt-[7%] w-[35%] h-[30vh] border rounded-3xl flex justify-around items-center">
                <div className="text-yellow-100">
                    <h1 className="text-3xl font-bold">LETS TODO</h1>
                    <p>Keeps doing things</p>
                </div>
                <div className="text-3xl font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-orange-600">
                    0/{tasks.length}
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
                <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
                    <div className="flex items-center">
                        <div
                            className={`border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                        ></div>
                        <h1
                            className={` text-2xl font-extrabold text-yellow-100`}
                        >
                            Task 01
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
                <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
                    <div className="flex items-center">
                        <div
                            className={`bg-green-600 mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                        ></div>
                        <h1
                            className={`line-through text-2xl font-extrabold text-yellow-100`}
                        >
                            Task 01
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i className="ri-delete-bin-3-line"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default App;
