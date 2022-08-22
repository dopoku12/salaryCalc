import useArrObj from "./ArrObj";
const Output = ({ clear, usrInput }) => {
    const { inputFields } = useArrObj()
    return (
        <div>
            <form >
                <label>
                    Output
                </label>
                <select>
                    {
                        inputFields.map((i) => {
                            return (

                                <option key={i.keys} required>{i.label}</option>
                            )

                        }
                        )
                    }
                </select>

                <br />
                <input type="number" placeholder="enter here..."
                    value={usrInput}
                />
                <br /> <br />
                <button onClick={clear}>
                    Clear
                </button>
            </form>

        </div>




    );
}
export default Output;