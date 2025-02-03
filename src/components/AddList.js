import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddContent() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');
    // const [tasks, setTasks] = useState({});

    const captureDate = (event) => {
        setDate(event.target.value)
    }
    const captureTask = (event) => {
        setTask(event.target.value)
    }
    const captureTime = (event) => {
        setTime(event.target.value)
    }


    const HandleSubmit = (event) => {
        event.preventDefault()
        // const saveTasks = setTasks(task)
        
        const Lists = { date, time, task };
        axios
            .post("http://localhost:4000/tasks", Lists)  //!           send a POST request to the server
            .then((response) => {                       //!           if the request is successful
                toast.success("Task added successfully !", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            })

            .catch((error) => {                          //!           if the request fails
                toast.error(
                    "An error occured while adding the task !. please try again later"
                );
            });
    };

    


    return (
        <div className="formPage pt-5">
            <Form className="form-field mt-5 border border-1 p-4 bg-body-tertiary rounded rounded-5" onSubmit={HandleSubmit}>
                <h3 className="title text-center bg-dark text-light rounded rounded-3 p-3 fw-bolder mt-3">FILL THIS FORM BELOW TO ADD TODAY'S FIRST TASKS</h3>
                <Form.Label className="mb-2 mt-2 ms-4">Select Date </Form.Label>
                <Form.Control className="rounded rounded-4 ps-3 border border-1 border-black-subles mb-2" type="date" placeholder="date" onChange={captureDate} />
                <Form.Label className="mb-2 mt-2 ms-4">Select time to perform task </Form.Label>
                <Form.Control className="rounded rounded-4 ps-3 border border-1 border-black-subles mb-2" type="time" placeholder="date" onChange={captureTime} />
                <Form.Label className="mb-2 mt-2 ms-4">Task: </Form.Label>
                <Form.Control className="rounded rounded-4 ps-3 border border-1 border-black-subles mb-2" type="text" placeholder="input your first task here" onChange={captureTask} />
                <Button type="submit" size="lg" variant="outline-success" className="submit-btn d-grid w-75 mt-5 rounded rounded-4">Submit</Button>

            </Form>
            <ToastContainer />
        </div>
    );
}

export default AddContent;
