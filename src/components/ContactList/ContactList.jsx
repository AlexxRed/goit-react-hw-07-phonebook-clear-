import { List,ButtonDelete, ItemList, ContactName, ContactNumber } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Loader } from 'components/Loader/Loader';



const ContactList = () => {
  const { data = [], isLoading } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.value);

  const visibleContacts = useMemo(
    () => {
      const normalizedFilter = filter.toLowerCase();
      return data.filter(el =>
        el.name.toLowerCase().includes(normalizedFilter)
      );
    }, [data, filter]);
    
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
  };

  return(
    <List>
    {isLoading && <Loader/>}
    {visibleContacts.length === 0 && <h3>...oops has no contacts :(</h3>}
    {visibleContacts.map(({ id, name, number, phone }) => (
      <ItemList key={id}>
        <p>
          <ContactName>{name}:</ContactName>
          <ContactNumber href={`tel:${number??phone}`}>{number??phone}</ContactNumber>
        </p>
        <ButtonDelete type="button" onClick={() => deleteContact(id)}>
          Delete
        </ButtonDelete>
      </ItemList>
    ))}
  </List>
);
}

export default ContactList;