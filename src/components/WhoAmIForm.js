import React from "react";
import { Form, } from "semantic-ui-react";
import { WhoAmIConsumer } from "../providers/WhoAmIProvider";

class WhoAmIForm extends React.Component {
  state = { 
    firstname: this.props.firstname, 
    lastname: this.props.lastname, 
    email: this.props.email,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });  

  handleSubmit = (e) => {
    e.preventDefault();
    const whoami = { ...this.state, };
    this.props.updateWhoAmI(whoami);
  }

  
    render() {
      const { firstname, lastname, email, } = this.state;
        return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
          label="New First Name"
          type="text"
          name="firstname"
          value={firstname}
          onChange={this.handleChange}
        />
        <Form.Input 
          label="New Last Name"
          type="text"
          name="lastname"
          value={lastname}
          onChange={this.handleChange}
        />
        <Form.Input 
          label="New Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
};

const ConnectedWhoAmIForm = (props) => {
  return (
    <WhoAmIConsumer>
      { value => (
        <WhoAmIForm
          { ...props }
          firstname={value.firstname}
          lastname={value.lastname}
          email={value.email}
          updateWhoAmI={value.updateWhoAmI}
        />
      )}
    </WhoAmIConsumer>
  )
}

export default ConnectedWhoAmIForm
// export default WhoAmIForm;