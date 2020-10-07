import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, Container} from 'reactstrap';

  import styles from './BlogHeader.module.scss'
function BlogHeader(){
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container}>
        <Navbar  expand="md">
          <NavbarBrand href="/">
            <img className={styles.logo} src="/logo-dinkbit-22-white.png" />
          </NavbarBrand>
          <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Nosotros</NavLink>
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
                <NavLink href="/components/">Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contacto</NavLink>
              </NavItem>
              <div className={styles.blog}>
              <NavItem >
                <NavLink href="/components/">Blog</NavLink>
              </NavItem>
              </div>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
        <Container className={styles.textWrapper}>
          <p> BLOG </p>
          <h1> Compartimos</h1>
          <h1> cosas increíbles</h1>
        </Container>
      </div>
    )
}

export default BlogHeader