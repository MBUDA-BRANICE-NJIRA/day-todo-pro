import FetchData from "./FetchData";
import Tasks from "./TasksList";
const Home = () => {
    const { List : tasks } = FetchData('http://localhost:4000/tasks')
    return (
        <div>
            <p className="hello-text me-4 mt-3 text-end text-primary">Hello Ian👋, Welcome😊</p>
            {tasks && <Tasks tasks={tasks} />}
        </div>
    );
}

export default Home;