import React from 'react';
import firebase from 'firebase'
import "./Speaker.css"
import {Button,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown,
        DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Speaker extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logout() {
    firebase.auth().signOut();
    this.props.history.push('/');
  }
  render() {
    return (
      <div>

        <div className="bar">
        <Navbar color="light" light expand="md" className="HeaderTab" >
          <NavbarBrand >Speaker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {firebase.auth().currentUser.displayName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem style={{color: 'red'}} onClick={this.logout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>

        <div className="LogoBar">
            <h1 className = "Logo">Barcamp</h1>
        </div>
        <div className="ButtonTab">
            <Button color="secondary">Add</Button>
        </div>
      </div>
    );
  }
}

export default Speaker ;