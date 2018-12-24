import React, { Component } from "react";

const UserContext = React.createContext();

export class UserContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      rank: null,
      serial: null,
      signature: null,
      signatureType: null,
      updateUser: this.updateUser
    };
  }

  updateUser = (field, value) => {
    this.setState({ [field]: value }, () =>
      this.updateLocalStorage(field, value)
    );
  };

  updateLocalStorage = (field, value) => {
    localStorage.setItem(field, value);
  };

  componentDidMount() {
    const user = this.state;
    for (var key in user) {
      if (user.hasOwnProperty(key) && key != "updateUser") {
        if (localStorage.getItem(key) != null) {
          this.setState({ [key]: localStorage.getItem(key) });
        }
      }
    }
  }

  render() {
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export const UserContextConsumer = UserContext.Consumer;
