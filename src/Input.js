import { useState } from "react";
import useArrObj from "./ArrObj";
import Output from "./Output";
import { BsArrowLeftRight } from "react-icons/bs";
const Input = () => {
    //states
    const [usrInput, setUsrInput] = useState('');
    const [placeholder, setPlaceHolder] = useState("Input here...");

    const [clearStatus, setClearStatus] = useState(false);
    const [checkStatus, setCheckStatus] = useState(false);
    //custom hook
    const { inputFields, usa } = useArrObj()

    function submit(e) {
        e.preventDefault()
        const num = parseInt(usrInput)
        setUsrInput(num)
        setClearStatus(true)
    }

    function clear() {
        setClearStatus(false)
        setUsrInput('')
    }

    function changeStatus(id) {
        setCheckStatus(true)
        const filtered = inputFields.filter(i => i.id === id);
        console.log("tl", filtered);
        setPlaceHolder(filtered.map(i => i.placeholder))
    }


    console.log(placeholder);
    // if id dosen't === id on change then add formula
    return (
        <div className="grid-container">\<br />
            <select className="states">
                {
                    usa.map(i => <option key={i.keys}>{i.name}</option>)
                }
            </select>
            <form onSubmit={submit}>
                <div className="grid-item1">
                    <label>
                        Input
                    </label>
                    <br />
                    <select>
                        {
                            inputFields.map(i =>
                                <option
                                    key={i.id}
                                    onClick={() => changeStatus(i.id)}
                                    value={i.label}
                                >
                                    {i.label}
                                </option>
                            )
                        }
                    </select>
                    <br />

                    <input type="number"

                        placeholder={placeholder}
                        required
                        value={usrInput}
                        onChange={(e) => setUsrInput(e.target.value)}
                    />
                    {

                        <input type="number" placeholder="enter hrs " />
                    }
                </div>

                <button className="grid-item2">
                    <BsArrowLeftRight />
                </button>
                <br />
                <Output clear={clear} usrInput={usrInput} />
            </form>
        </div>
    );
}

export default Input;