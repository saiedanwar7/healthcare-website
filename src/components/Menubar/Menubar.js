import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css'



const Menubar = () => {
  const{user, logOut} = useAuth();
    return (
        <div>
            <Navbar className="p-2 nav-bg" collapseOnSelect expand="lg"  variant="dark" sticky="top">
         <Container>
           <Navbar.Brand className="title text-color fw-bold" as={Link} to="/home">HealthCare</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link className="text-color mx-2 fw-bold" as={Link} to="/doctors">Doctors</Nav.Link>
                 <Nav.Link className="text-color fw-bold" as={Link} to="/About">About</Nav.Link>
   
          </Nav>

          {/* <Nav>

          {
            user.email? <div className="d-flex align-items-center"><sapn className="me-3 text-decoration-none text-light">{user.displayName}</sapn>
            <a className="text-decoration-none me-4 text-light" onClick={logOut}>LogOut</a></div>
            :
            <Nav.Link className="text-decoration-none me-4 text-light" as={Link} to="/login">Login</Nav.Link>

          }
            
          
          </Nav> */}

                  <Nav>
                            {
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                user.email ? <div className="d-flex align-items-center"><span className="me-3 text-decoration-none text-color fw-bold">{user.displayName}</span><Nav.Link  className="text-decoration-none text-color fw-bold me-4 nav-link" onClick={logOut}>Logout</Nav.Link ></div>
                                    :
                                    <Link className="text-decoration-none text-color fw-bold me-4 text-color fw-bold nav-link " to="/login">Login</Link>
                            }
                   </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Menubar;



// {user.email.substring(0, user.email.lastIndexOf("@"))}


// {<Nav.Link as={Link} to="/login">Login</Nav.Link>}
//       {/* <span className="text-danger"> {user.displayName} </span> */}
//       {user?.email && <button onClick={logOut}>log out</button>}

                      //  <Nav>
                      //       {
                      //           // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      //           user.email ? <div className="d-flex align-items-center"><span className="me-3 text-decoration-none text-light">{user.displayName}</span><a className="text-decoration-none me-4 nav-link" onClick={logOut}>Logout</a></div>
                      //               :
                      //               <Link className="text-decoration-none me-4 text-light nav-link " to="/login">Login</Link>
                      //       }
                      //   </Nav>