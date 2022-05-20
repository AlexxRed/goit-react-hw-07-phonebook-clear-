import { ButtonDelete, ItemList } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';



const ContactList = () => {
  const { data = [] } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.value);
  // console.log(data);


  const visibleContacts = useMemo(
    () => {
        const normalizedFilter = filter.toLowerCase();
        return data.filter(el =>
        el.name.toLowerCase().includes(normalizedFilter)
        );
    },[data, filter])
    
    //   const getVisibleContacts = useCallback(
    // () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return data.filter(el =>
    //     el.name.toLowerCase().includes(normalizedFilter)
    //     );
    // },[data, filter])
  // const visibleContacts = [];

  const deleteContact = id => {
    deleteContacts(id);
    console.log(id);
  };

  return(
    <ul>
    {visibleContacts.length === 0 && <h3>...oops has no contacts :(</h3>}
    {visibleContacts.map(({ id, name, number }) => (
      <ItemList key={id}>
        <p>
          {name}: {number}
        </p>
        <ButtonDelete type="button" onClick={() => deleteContact(id)}>
          Delete
        </ButtonDelete>
      </ItemList>
    ))}
  </ul>
);
}

export default ContactList;