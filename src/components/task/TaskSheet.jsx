import { useEffect, useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskAdd from "./TaskAdd";
import TaskItem from "./TaskItem";

const TaskSheet = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Complete project proposal",
      tags: ["work", "project"],
      priority: "high",
      isFavorite: false,
    },
  ]);

  const handleTaskAdd = (task) => {
    if (!isUpdateData) {
      setTaskData([...taskData, task]);
      setIsModalShow(false);
    } else {
      let filterData = taskData.map((data) => {
        if (data.id == task.id) {
          return task;
        }
        return data;
      });
      setTaskData(filterData);
      setIsModalShow(false);
      setIsUpdateData(null);
    }
  };
  const [isUpdateData, setIsUpdateData] = useState(null);
  const handleUpdate = (task) => {
    // console.log(task);
    // setIsUpdateData(task)
    // console.log(isUpdateData);
    // setIsModalShow(true)
    setIsUpdateData(task);
  };
  useEffect(() => {
    if (isUpdateData !== null) {
      setIsModalShow(true);
    }
  }, [isUpdateData]);

  const handleDelete = (task) => {
    const filteredData = taskData.filter((data) => data.id !== task.id);
    setTaskData(filteredData);
  };

  const handleBookmark = (task) => {
    let updateData = taskData.map((data) => {
      if (data.id == task.id) {
        task.isFavorite = !task.isFavorite;
        return task;
      }
      return data;
    });
    setTaskData(updateData);
  };

  const handleAllDelete = () => {
    setTaskData([]);
  };

  const handleSearch = (text) => {
    const filterData = taskData.filter((data) =>
      data.title.toLowerCase().includes(text.toLowerCase())
    );
    setTaskData(filterData);
  };

  return (
    <>
      {isModalShow && (
        <TaskAdd
          setIsModalShow={setIsModalShow}
          onSave={handleTaskAdd}
          isUpdate={isUpdateData}
          setIsUpdateData={setIsUpdateData}
        ></TaskAdd>
      )}

      <section className="mb-20" id="tasks">
        <div className="container">
          <Search onSearch={handleSearch}></Search>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onDeleteAll={handleAllDelete}
              setIsModalShow={setIsModalShow}
            ></TaskAction>
            <div className="overflow-auto">
              <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                  <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      {" "}
                      Title{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                      {" "}
                      Description{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                      {" "}
                      Tags{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Priority{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Options{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {taskData.map((task) => (
                    <TaskItem
                      task={task}
                      key={task.id}
                      onUpdateClick={handleUpdate}
                      onDelete={handleDelete}
                      onBookMark={handleBookmark}
                    ></TaskItem>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskSheet;
