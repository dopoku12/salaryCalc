import { useState } from "react";
function submit() {

}

const Form = () => {
    const [usrInput, setUsrInput] = useState()

    return (
        <form onSubmit={submit}>

            <label>
                Yearly Pay:
            </label>
            <br />
            <input type="number" placeholder="Enter Yearly Pay"
                value={usrInput}
                onchange={(e) => { setUsrInput(e.target.value) }}
            />
            <br />

            <label>
                Bi-Weekly Pay:
            </label>
            <br />
            <input type="number" placeholder="Enter Bi-weekly Pay"
                value={usrInput}
                onChange={(e) => { setUsrInput(e.target.value) }}
            />
            <br />


            <label>
                Weekly Pay:
            </label>

            <br />
            <input type="number" placeholder="Enter Weekly Pay"
                value={usrInput}
                onChange={(e) => { setUsrInput(e.target.value) }}
            />
            <br />

            <label >
                Daily Pay:
            </label>

            <br />
            <input type="number" placeholder="Enter Daily Pay"
                value={usrInput}
                onChange={(e) => { setUsrInput(e.target.value) }}
            />
            <br />

            <label >
                Hourly Pay:
            </label>

            <br />
            <input type="number" placeholder="Enter Hourly Pay"
                value={usrInput}
                onChange={(e) => { setUsrInput(e.target.value) }}
            />
            <br />


            <button>
                submit
            </button>

        </form>

    );
}

export default Form;