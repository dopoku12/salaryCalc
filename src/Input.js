import { useState } from "react";
import useArrObj from "./ArrObj";
const Input = () => {
    const [usrInput, setUsrInput] = useState('')
    const [status, setStatus] = useState(false)
    const { inputFields } = useArrObj()
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
        <form onSubmit={submit}>
            {
                inputFields.map((i) => {
                    return (
                        <li key={i.id}>
                            <label>
                                {i.label}
                            </label>

                            <br />
                            <input type="number" placeholder={i.placeholder}
                                required
                                value={
                                    status ?
                                        usrInput + i.formula :
                                        usrInput
                                }
                                onChange={(e) => {

                                    status || setUsrInput(e.target.value)
                                }}
                            />
                            <br /> <br />
                        </li>
                    )
                }
                )
            }


            <button>
                submit
            </button>

            <button onClick={clear}>
                Clear
            </button>
        </form>

    );
}

export default Input;