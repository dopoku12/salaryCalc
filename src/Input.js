import { useState } from "react";
import useArrObj from "./ArrObj";
import Output from "./Output";
import { BsArrowLeftRight } from "react-icons/bs";
const Input = () => {
    //states
    const [usrInput, setUsrInput] = useState('')
    const [status, setStatus] = useState(false)
    //custom hook
    const { inputFields, usa } = useArrObj()

    function submit(e) {
        e.preventDefault()
        const num = parseInt(usrInput)
        setUsrInput(num)
        setStatus(true)
    }

    function clear() {
        setStatus(false)
        setUsrInput('')
    }

    console.log('input:', inputFields);
    // if id dosen't === id on change then add formula
    return (
        <div>
            <select className="states">
                {
                    usa.map(i => <option key={i.keys}>{i.name}</option>)
                }
            </select>

            <form onSubmit={submit}>
                <label>
                    input:
                </label>
                <br />
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
                <input type="number" placeholder="enter here..."
                    required
                    value={usrInput}
                    onChange={(e) => setUsrInput(e.target.value)}
                />
            </form>

            <button>
                <BsArrowLeftRight />
            </button>

            <Output clear={clear} usrInput={usrInput} />
        </div>
    );
}

export default Input;