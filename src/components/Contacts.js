import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: "Holly",
          email: "hollyabc@gmail",
          phone: "555-123-456",
          id: 1
        },
        {
          name: "Aman",
          email: "ama@gmail",
          phone: "523-123-456",
          id: 2
        },
        {
          name: "Mad",
          email: "ivy@gmail",
          phone: "451-123-456",
          id: 3
        },
        {
          name: "cole",
          email: "cole@gmail",
          phone: "1235-123-456",
          id: 4
        }
      ]
    };
  }

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(itr => itr.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    let { contacts } = this.state;
    contacts = contacts.map(itr => (
      <Contact
        key={itr.id}
        values={itr}
        deleteClickHandler={this.deleteContact.bind(this, itr.id)}
      />
    ));

    return <React.Fragment>{contacts}</React.Fragment>;
  }
}

export default Contacts;
