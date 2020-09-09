import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const HeaderNavBar:React.FC = () => {
        return (
            <div className='header'>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/">О Проекте</Nav.Link>
                                <Nav.Link href="/league">Сводные Таблицы</Nav.Link>
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
            </div>
        )
    }
export default HeaderNavBar;
