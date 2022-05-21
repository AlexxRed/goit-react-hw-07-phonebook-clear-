import { Label, InputFilter } from './Filter.styled';
import { setFilter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);

    const changeFilter = e => {
        if (e.currentTarget.value === '') {
            Notify.info('who are you looking for')
        }
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