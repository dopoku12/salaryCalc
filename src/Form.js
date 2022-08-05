import { useState } from "react";
const Form = () => {
    const [usrInput, setUsrInput] = useState('')
    const [status, setStatus] = useState(false)
    const inputFields = [
        {
            id: 0,
            label: 'Annual Pay:',
            placeholder: 'Enter Annual Pay',
            formula: 40
        },
        {
            id: 3,
            label: 'Monthly Pay:',
            placeholder: 'Enter Monthly Pay',
            formula: 40
        },


        {
            id: 1,
            label: ' Bi-Weekly Pay:',
            placeholder: 'Enter Bi-Weekly Pay',
            formula: 40
        },
        {
            id: 2,
            label: 'Weekly Pay:',
            placeholder: 'Enter Weekly Pay',
            formula: 40
        },

        {
            id: 4,
            label: 'Hourly Pay:',
            placeholder: 'Enter Hourly Pay',
            formula: 10
        },
    ]



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

export default Form;