import { Label, InputFilter } from './Filter.styled';

const Filter = () => {

    const changeFilter = e => {
        const filter = e.currentTarget.value 
        console.log(filter);
    };

    return (<Label>
    Find contacts by name
    <InputFilter type="text" onChange={changeFilter} />
    </Label>)
};


export default Filter;