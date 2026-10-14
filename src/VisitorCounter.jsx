
import { useEffect, useState } from "react";

export default function VisitorCounter() {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch(import.meta.env.VITE_VISITOR_API_URL)
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
