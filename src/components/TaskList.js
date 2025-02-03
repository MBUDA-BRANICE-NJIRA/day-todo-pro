import { Link } from "react-router-dom/cjs/react-router-dom";

const Tasks = ({ tasks, date }) => {

    return (
        <div className="Tasks-list">
            <h2>{date}</h2>
            {tasks.map((task) => (
                    <div key={task.id}>
                        <Link to={`ViewTask/${task.id}`}>
                            <h2>{task.time}</h2>
                            <p>{task.task}</p>
                        </Link>
                    </div>
                )
                )}
        </div>
    )
};

export default Tasks;