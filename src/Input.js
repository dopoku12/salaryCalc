import { useState } from "react";
import useArrObj from "./ArrObj";
import Output from "./Output";
import { BsArrowLeftRight } from "react-icons/bs";
const Input = () => {
    //custom hook
    const { options, usa } = useArrObj()
    const [stateValue, setState] = useState()
    const usStates = usa.map(i => { return i })
    console.log(usStates);
    console.log(stateValue);
    //states
    // const [usrInput, setUsrInput] = useState('');
    // const [selected, setSelected] = useState(options[0].label);

    // const [clearStatus, setClearStatus] = useState(false);
    // const [checkStatus, setCheckStatus] = useState(false);

    // function submit(e) {
    //     e.preventDefault()
    //     const num = parseInt(usrInput)
    //     setUsrInput(num)
    //     setClearStatus(true)
    // }

    // function clear() {
    //     setClearStatus(false)
    //     setUsrInput('')
    // }

    // function handleChange(id) {
    //     setCheckStatus(true)
    //     const label = options.map(index => {
    //         if (index.id === id) {
    //             return index.label
    //         }
    //     })
    //     setSelected(label)

    // }

    // console.log(selected);
    // if id dosen't === id on change then add formula
    return (
        <div className="grid-container">\<br />
            <select className="states" onChange={''} >


                <option key={''} value={''}>
                    {''}
                </option>)

            </select>
            <form onSubmit={''}>
                <div className="grid-item1">
                    <label>
                        Input
                    </label>
                    <br />
                    <select value={''} onChange={() => options.map(i => '')}>
                        {
                            options.map(i =>
                                <option key={i.label} value={i.label}>
                                    {i.label}
                                </option>)
                        }
                    </select>
                    <br />
                    <input type="number"
                        placeholder={''}
                        required
                        value={''}
                        onChange={(e) => ''}
                    />
                    <br />
                    {
                        <input type="number" placeholder="enter hrs " />
                    }
                </div>
                <button className="grid-item2">
                    <BsArrowLeftRight />
                </button>
                <br />
                <Output clear={''} usrInput={''} />
            </form>
        </div>
    );
}

export default Input;