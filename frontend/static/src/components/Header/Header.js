import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Header({ superState, logoutUser }) {
  return (
    <>
      <Navbar expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand className="app-logo" href="/">
            All Sports Goes News App
          </Navbar.Brand>
          <div className="desk-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {!superState.auth && (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
              {superState.auth && !superState.admin && (
                <>
                  <Nav.Link href="create">Create Article</Nav.Link>
                  <Nav.Link href="articles/user">My Articles</Nav.Link>
                </>
              )}
              {superState.admin && (
                <>
                  <Nav.Link href="articles/admin">Review Articles</Nav.Link>
                </>
              )}
              {superState.auth && (
                <Nav.Link href="/" onClick={logoutUser}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
      

      <Nav className="me-auto mobile-nav">
        <Nav.Link href="/">Home</Nav.Link>
        {!superState.auth && (
          <>
            <Nav.Link href="/login">Login</Nav.Link>
          </>
        )}
        {superState.auth && !superState.admin && (
          <>
            <Nav.Link href="create">Create Article</Nav.Link>
            <Nav.Link href="articles/user">My Articles</Nav.Link>
          </>
        )}
        {superState.admin && (
          <>
            <Nav.Link href="articles/admin">Review Articles</Nav.Link>
          </>
        )}
        {superState.auth && (
          <Nav.Link href="/" onClick={logoutUser}>
            Logout
          </Nav.Link>
        )}
      </Nav>
    </>
  );
}

export default Header;