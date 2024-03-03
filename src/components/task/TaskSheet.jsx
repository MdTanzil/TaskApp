import { useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskItem from "./TaskItem";


const TaskSheet = ({setIsModalShow}) => {
    const initialData = [
        {
          "id": 1,
          "title": "Task 1",
          "description": "Complete project proposal",
          "tags": ["work", "project"],
          "priority": "high"
        },
        {
          "id": 2,
          "title": "Task 2",
          "description": "Buy groceries",
          "tags": ["personal", "groceries"],
          "priority": "medium"
        },
        {
          "id": 3,
          "title": "Task 3",
          "description": "Exercise for 30 minutes",
          "tags": ["personal", "health"],
          "priority": "low"
        }
      ]
      
    const [taskData, setTaskData] = useState(initialData);


    return (
        <section className="mb-20" id="tasks">
		
		<div className="container">

        <Search></Search>

			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction></TaskAction>
				<div className="overflow-auto">
					<table className="table-fixed overflow-auto xl:w-full">
						<thead>
							<tr>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
							</tr>
						</thead>
						<tbody>
                            {
                                taskData.map(task => <TaskItem task={task} key={task.id}></TaskItem>)
                            }


						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
    );
};

export default TaskSheet;