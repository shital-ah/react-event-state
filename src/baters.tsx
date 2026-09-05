import { useState } from "react";

export default function Batter() {


    const [runs,setRuns] = useState(0);

    const handleHit = () => {
        setRuns(runs + 1);
    };

    const handleBoundary = () => {
        setRuns(runs + 4);
    };

    const handleOverBoundary = () => {
        setRuns(runs + 6);
    }

    return(
        <div>

            <p>Batter Score</p>
            <h2>Score: {runs}</h2>
            <button onClick={handleHit}>Hit</button>
            <br></br>
            <button onClick={handleBoundary}>Add Boundary</button>
            <br></br>
            <button onClick={handleOverBoundary}>Add Over Boundary</button>
        </div>

    )
}