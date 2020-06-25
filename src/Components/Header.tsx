import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from './Logo.png'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StartPage from '../Components/Navbar/StartPage';
import League from '../Components/Navbar/League';
import Reports from '../Components/Navbar/Reports';
import Legacy from '../Components/Navbar/Legacy';
import Participate from '../Components/Navbar/Participate';



export default class Header extends Component {
    render() {
        return(
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        height="50"
                        width="110"
                        className="d-inline-block align-top"
                        alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/league">Лига</Nav.Link>
                            <Nav.Link href="/reports">Отчеты</Nav.Link>
                            <Nav.Link href="/legacy">Легаси</Nav.Link>
                            <Nav.Link href="/participate">Участвовать в проекте</Nav.Link>
                            
                        </Nav>
                        <Form inline>
                            <FormControl 
                            type="text"
                            placeholder="Поиск"
                            className="mr-sm-2"
                            />
                            <Button variant="outline-info">Найти</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/league" component={League} />
                <Route exact path="/reports" component={Reports} />
                <Route exact path="/legacy" component={Legacy} />
                <Route exact path="/participate" component={Participate} />
               </Switch>
            </Router>

            </>
        )
    }
}

