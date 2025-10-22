export default function AddClick(setObj)
{
    setObj(prev => ({
            ...prev,
            additive: prev.additive + prev.multiplier
        }));
}