import React from "react";
import {useEffect} from "react";
import Error from "./Error.jsx";

export default function Game()
{
    const [obj, setObj] = React.useState({
        additive: 0,
        multiplier: 1,
    });

    const [autoRate, setAutoRate] = React.useState(0);

    const [cost, setCost] = React.useState([10, 20]);

    const [showError, setShowError] = React.useState(false);

    function AddClick()
    {
        setObj(prev => ({
            ...prev,
            additive: prev.additive + prev.multiplier
        }));
    }

    function showTempError()
    {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000); // hide after 2 seconds
    }

    function Double()
    {
        if(obj.additive < cost[0])
        {
            showTempError();
            return;
        } 
        setObj(prev => ({
            ...prev,
            additive: prev.additive - cost[0],
            multiplier: prev.multiplier * 2
        }));
        setCost(prev => [Math.floor(prev[0] * 2), prev[1]]);
    }

    function BuyAutoRate()
    {
        if(obj.additive < cost[1])
        {
            showTempError();
            return;
        } 

        setObj(prev => ({
            ...prev,
            additive: prev.additive - cost[1]
        }))

        setAutoRate(prev => prev + 1)
        setCost(prev => [prev[0], Math.floor(prev[1] * 2)]);
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
                <button onClick={AddClick}> + {obj.multiplier} </button>
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
                <small>Cost: {cost[0]}</small>
                <button onClick={Double}> x2 </button>
                <small>Cost: {cost[1]}</small>
                <button onClick={BuyAutoRate}> + {autoRate + 1} every second </button>
            </div>
        </>
    );
}