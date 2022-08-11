import Input from "./Input";
import Option from "./Option";

const arrObj = () => {
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

    return (

        <div>
            <Input obj={inputFields} />

            <Option />
        </div>
    );
}

export default arrObj;