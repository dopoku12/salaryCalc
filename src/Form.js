import { useState } from "react";
const Form = () => {
    const [usrInput, setUsrInput] = useState('')
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
        const Output = num
        setUsrInput(Output)
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
                                value={
                                    usrInput + i.formula
                                }
                                onChange={(e) => {

                                    setUsrInput(e.target.value)
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

            <button>
                Clear
            </button>
        </form>

    );
}

export default Form;