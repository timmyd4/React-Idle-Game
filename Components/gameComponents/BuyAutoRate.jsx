export default function BuyAutoRate(obj, cost, showTempError, setObj, setAutoRate, setCost)
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