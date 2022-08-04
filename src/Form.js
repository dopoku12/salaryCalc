import { useState } from "react";
function submit() {

}

const Form = () => {


    const inputFields = [
        {
            id: 0,
            label: 'Annual Pay:',
            placeholder: 'Enter Annual Pay',
        },
        {
            id: 1,
            label: ' Bi-Weekly Pay:',
            placeholder: 'Enter Bi-Weekly Pay',
        },
        {
            id: 2,
            label: 'Weekly Pay:',
            placeholder: 'Enter Weekly Pay',
        },
        {
            id: 3,
            label: 'Daily Pay:',
            placeholder: 'Enter Daily Pay',
        },
        {
            id: 4,
            label: 'Hourly Pay:',
            placeholder: 'Enter Hourly Pay',
        },

    ]






    const [usrInput, setUsrInput] = useState()

    return (
        <form onSubmit={submit}>
            {
                inputFields.map((i) => {
                    return (
                        <li id={i.id}>
                            <label>
                                {i.label}
                            </label>

                            <br />
                            <input type="number" placeholder={i.placeholder}
                                value={usrInput}
                                onchange={(e) => {
                                    setUsrInput(e.target.value)
                                }}
                            />
                            <br />
                        </li>
                    )
                }
                )
            }


            <button>
                submit
            </button>

        </form>

    );
}

export default Form;