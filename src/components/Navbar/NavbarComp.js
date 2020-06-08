import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faUser,
  faList,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Container,
  NavDropdown,
} from "react-bootstrap";

import "./NavbarComp.css";

const NavbarComp = (props) => {
  const userInfo = (
    <>
      <span className="mr-2">Tao là Nam</span>
      <img
        src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/96788846_643156332933712_8765027089964335104_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=f6aHIvfArvMAX9THAn_&_nc_ht=scontent.fvca1-2.fna&oh=ac60c3a49386b04cb15575487d7b626d&oe=5F00EF2A"
        className="ava-size"
      />
    </>
  );

  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="shadow-sm">
      <Container fluid>
        {/* Navbar */}
        <Container>
          <NavbarBrand href="#">
            <img
              src="https://scent-workshop.com/wp-content/uploads/2020/03/note-logo-300x223-1.png"
              width="80"
            />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="resp-navbar" />
          <Navbar.Collapse id="resp-navbar" className="justify-content-end">
            <div>
              <Nav className="mx-auto">
                <Nav.Link href="/test1">Home</Nav.Link>
                <Nav.Link href="/test2">Public Workshop</Nav.Link>
                <Nav.Link href="#3">Private Event</Nav.Link>
                <Nav.Link href="#4">B2B Service</Nav.Link>
                <Nav.Link href="#5">Our Scent Story</Nav.Link>
                <Nav.Link href="#6" className="bg-contact">
                  Online Workshop
                </Nav.Link>
              </Nav>
            </div>
            <div className="d-flex float-right align-items-center justify-content-between flex-nowrap ml-3">
              <a className="mx-2" href="#">
                <FontAwesomeIcon className="button-colour" icon={faFacebookF} />
              </a>
              <a className="mx-2" href="#">
                <FontAwesomeIcon className="button-colour" icon={faTwitter} />
              </a>
              <a className="mx-2" href="#">
                <FontAwesomeIcon className="button-colour" icon={faYoutube} />
              </a>
              <div className="nav-divider"></div>

              {props.isLoggedIn === "true" ? (
                <div>
                  <NavDropdown
                    className="d-flex flex-column "
                    title={userInfo}
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <FontAwesomeIcon
                        size="sm"
                        className="mr-2 icon-colour"
                        icon={faUser}
                      />
                      <span className="ml-2">Profile</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <FontAwesomeIcon
                        size="sm"
                        className=" mr-1 icon-colour"
                        icon={faCogs}
                      />
                      <span className="ml-2">Setting</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <FontAwesomeIcon
                        size="sm"
                        className="mr-2 icon-colour"
                        icon={faList}
                      />
                      <span className="ml-2">Activity</span>
                    </NavDropdown.Item>
                    <div className="dropdown-divider" />
                    <NavDropdown.Item>
                      <FontAwesomeIcon
                        size="sm"
                        className="mr-2 icon-colour"
                        icon={faSignOutAlt}
                      />
                      <span className="ml-2">Sign Out</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <div>
                  <button className="rounded-button login-btn-colour">
                    Login
                  </button>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};
export default NavbarComp;
