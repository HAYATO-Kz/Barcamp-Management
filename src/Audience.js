import React, { Component } from 'react';
import './Audience.css';
import firebase from 'firebase';
import { Collapse, Navbar, Nav, NavbarToggler, NavbarBrand, UncontrolledDropdown, 
        DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class Audience extends Component{
    render(){
        return(
            <div>
                <Header out={this.props}/>
                <Topic />
            </div>
        );
    }
}

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: 'false'
        };

        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }

    logout(){
        firebase.auth().signOut();
        this.props.out.history.push('/');
    }
    
    render(){
        return(
            <div>

                <Navbar color='light' light expand='md' className='HeadTap'>
                    <NavbarBrand>Audience</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>{firebase.auth().currentUser.displayName}</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem style={{color: 'red'}} onClick={this.logout}>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                <div className='LogoBar'>
                    <h1 className='Logo'>Barcamp</h1>
                </div>
            </div>
        );
    }
}

class Topic extends Component{
    constructor(props){
        super(props);

        this.state = {
            topic: "",
            detail: ""
        };
    }

    vote(){}

    render(){
        return(
            <div className='App'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            1
                        </div>
                        <div className='col'>
                            2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Audience;