import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

  import styles from './Header.module.scss'
function Header (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.stickyNav}>
        <Navbar  expand="md">
          <div>
          <NavbarBrand href="/">
            <img className={styles.logo} src="/logo-dinkbit-22.png" />
          </NavbarBrand>
          </div>
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
              <NavItem className={styles.blog} color="primary" >
                <NavLink href="/components/">Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    )
}

export default Header