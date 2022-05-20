import { ButtonDelete, ItemList } from './ContactList.styled';

const ContactList = () => {


    // const getVisibleContacts = () => {
    //     const normalizedFilter = filtredList.toLowerCase();
    //     return conactsList.filter(el =>
    //     el.name.toLowerCase().includes(normalizedFilter)
    //     );
    // };
  
  const visibleContacts = [];

  const deleteContact = id => {
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