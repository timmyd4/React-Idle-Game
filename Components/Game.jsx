import React from "react";
import {useEffect} from "react";
export default function Game()
{
    const [obj, setObj] = React.useState({
        additive: 0,
        multiplier: 1,
    });

    const [autoRate, setAutoRate] = React.useState(0);

    function AddClick()
    {
        setObj(prev => ({
            ...prev,
            additive: prev.additive + prev.multiplier
        }));
    }

    function Double()
    {
        setObj(prev => ({
            ...prev,
            multiplier: prev.multiplier * 2
        }));
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
                <button onClick={Double}> x2 </button>
                <button onClick={() => setAutoRate(prev => prev + 1)}> + {autoRate + 1} every second </button>
            </div>
        </>
    );
}