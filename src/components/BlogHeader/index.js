import React, { useState } from 'react';

import {  BrowserRouter as Router, Switch,  Route,   Link, useParams} from "react-router-dom";

import Blog from '../../screens/Blog'
import HomePage from '../../screens/Home'
import ContactForm from '../../screens/ContactForm'
import DetailView from '../../screens/DetailView'

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Container} from 'reactstrap';

import styles from './BlogHeader.module.scss'
function BlogHeader(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container}>
        <Router>
        <Navbar  expand="md">
          <NavbarBrand>
            <img className={styles.logo} src="/logo-dinkbit-22-white.png" />
          </NavbarBrand>
          <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink >Nosotros</NavLink>
               </NavItem>
             <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                ¿Qué hacemos?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Desarrollo Web
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Desarrollo móbil
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Diseño de marca
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contacto</NavLink>
              </NavItem>
              <div className={styles.blog}>
              <NavItem >
                <NavLink >Blog</NavLink>
              </NavItem>
              </div>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
        <Switch>
          <Route path='/blog'  > <Blog /> </Route>
          <Route path='/home'  > <HomePage /> </Route>
          <Route path='/contact' > <ContactForm /> </Route>
          <Route path='/detail' > <DetailView /> </Route>

        </Switch>

        </Router>
        <Container className={styles.textWrapper}>
          <p> BLOG </p>
          <h1> Compartimos</h1>
          <h1> cosas increíbles</h1>
        </Container>
      </div>
    )
}

export default BlogHeader