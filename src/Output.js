import useArrObj from "./ArrObj";
const Output = ({ clear, usrInput }) => {
    const { inputFields } = useArrObj()
    return (
        <div className="grid-item3">
            <label>
                Output
            </label>
            <br />
            <select>
                {
                    inputFields.map(i =>
                        <option key={i.id} required>{i.label}</option>
                    )
                }
            </select>

            <br />
            <input type="number" placeholder="Output here..."

                defaultValue={usrInput}
            />
            <br /> <br />
            <button className="clear" onClick={clear}>
                Clear
            </button>
        </div>
    );
}
export default Output;