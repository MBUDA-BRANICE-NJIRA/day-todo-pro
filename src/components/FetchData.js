import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = (url) => {
    const [Lists , setLists] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setLists(response.Lists);

            })
            .catch(error => {
                console.error(error);
            });
    }, [url])
    return { Lists };
}

export default FetchData;