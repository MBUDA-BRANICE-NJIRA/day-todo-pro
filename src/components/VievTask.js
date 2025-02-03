import { useParams } from "react-router-dom/cjs/react-router-dom";
import FetchData from "./FetchData";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const ViewTasks = () => {
    const { id } = useParams()
    const { List: tasks } = FetchData('http://localhost:4000/tasks/' + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();

        axios.delete('http://localhost:4000/tasks/' + id)
            .then(response => {
                alert(`Task deleted successfully`);
                history.push('/');
            })
    }

    return (
        <div>
            {tasks && (
                <article>
                    <h2>{tasks.date}</h2>
                    <p>{tasks.time}</p>
                    <p>{tasks.tasks}</p>
                    <Button onClick={handleDelete} variant="danger">Delete</Button>
                </article>
            )}
        </div>
    );
}

export default ViewTasks;