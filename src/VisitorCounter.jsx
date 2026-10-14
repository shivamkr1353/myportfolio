
import { useEffect, useState } from "react";

export default function VisitorCounter() {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch(
            "https://wpfu892qc5.execute-api.eu-north-1.amazonaws.com/visitors"
        )
            .then((response) => {
                if (!response.ok) throw new Error("API request failed");
                return response.json();
            })
            .then((data) => setCount(data.count))
            .catch((error) => console.error(error));
    }, []);

    return (
        <p>
            Visitors: {count === null ? "Loading..." : count}
        </p>
    );
}
