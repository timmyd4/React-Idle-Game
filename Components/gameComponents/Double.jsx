export default function Double(obj, setObj, setCost, cost, showTempError)
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