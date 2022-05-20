import { Label, InputFilter } from './Filter.styled';
import { setFilter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (<Label>
    Find contacts by name
        <InputFilter
            type="text"
            value={filter}
            onChange={changeFilter} />
    </Label>)
};


export default Filter;