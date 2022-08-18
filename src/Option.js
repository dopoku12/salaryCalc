import useArrObj from "./ArrObj";
const Option = () => {
    const { usa } = useArrObj()
    return (
        <select>
            {
                usa.map(i => <option key={i.keys} value={i.name}></option>)
            }
        </select>
    );
}
export default Option;