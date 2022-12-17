import { Contact, ContactsList, DeleteButton } from './Contacts.styled';
import { capitalLetter } from 'helpers';

export const Contacts = ({ contacts, deleteContact }) => {
    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Contact key={id}>
                        {name}: {number}
                        <DeleteButton
                            onClick={() => {
                                deleteContact(id);
                            }}
                        >
                            {capitalLetter('delete')}
                        </DeleteButton>
                    </Contact>
                );
            })}
        </ContactsList>
    );
};
