    import React from 'react';
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    import Form from 'react-bootstrap/Form';
    import FormControl from 'react-bootstrap/FormControl';
    import 'bootstrap/dist/css/bootstrap.min.css';


    function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* Kolom pencarian di sini */}
                <Form className="d-flex w-100">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2 w-75"
                    aria-label="Search"
                />
                </Form>
            </Nav>
            <Nav className="ms-auto">
                {/* Dropdown Super Admin di kanan */}
                <NavDropdown title="Super Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

    export default BasicExample;
