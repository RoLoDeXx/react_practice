import React, { Component } from "react";
import "./styles/Contact.css";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false
    };
  }

  dropDown = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  deleteContact = () => {
    this.props.deleteClickHandler();
  };

  render() {
    const { values } = this.props;

    const { showContactInfo } = this.state;
    return (
      <div className="people">
        <section>
          <h4>
            {values.name}
            <i className="fas fa-sort-down" onClick={this.dropDown} />
            <i className="fa fa-times" onClick={this.deleteContact} />
          </h4>

          {showContactInfo ? (
            <ul>
              <li>{values.email}</li>
              <li>{values.phone}</li>
            </ul>
          ) : null}
        </section>
      </div>
    );
  }
}

export default Contact;
