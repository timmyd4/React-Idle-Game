import React from "react";
import {useEffect} from "react";
import Error from "./Error.jsx";
import AddClick from "./gameComponents/AddClick.jsx";
import Double from "./gameComponents/Double.jsx";
import BuyAutoRate from "./gameComponents/BuyAutoRate.jsx";

export default function Game()
{
    const [obj, setObj] = React.useState({
        additive: 0,
        multiplier: 1,
    });

    const [autoRate, setAutoRate] = React.useState(0);

    const [cost, setCost] = React.useState([10, 20]);

    const [showError, setShowError] = React.useState(false);

    function showTempError()
    {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000); // hide after 2 seconds
    }

    useEffect(() => {
        if(autoRate === 0) return;

        const interval = setInterval(() => {
            setObj(prev => ({
                ...prev,
                additive: prev.additive + autoRate
            }))
        }, 10000);

        return () => clearInterval(interval);
    }, [autoRate]);

    return(
        <>
            {showError && <Error/>}
            <div className="add-btn">
                <button onClick={() => AddClick(setObj)}> + {obj.multiplier} </button>
            </div>
            <div className="stats-container">
                <div className="stat-box">
                    <h5>Multiplier</h5>
                    <p>{obj.multiplier}</p>
                </div>

                <div className="stat-box main-box">
                    <h5>Total</h5>
                    <p className="main">{obj.additive}</p>
                </div>

                <div className="stat-box">
                    <h5>10 Second Rate</h5>
                    <p>{autoRate}</p>
                </div>
            </div>
            <div className="btn-container">
            <div className="upgrade">
                <small>Cost: {cost[0]}</small>
                <button onClick={() => Double(obj, setObj, setCost, cost, showTempError)}>x2</button>
            </div>

            <div className="upgrade">
                <small>Cost: {cost[1]}</small>
                <button onClick={() => BuyAutoRate(obj, cost, showTempError, setObj, setAutoRate, setCost)}>+ {autoRate + 1} every 10 seconds</button>
            </div>
            </div>
        </>
    );
}