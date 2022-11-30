import "../../styles/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header({ superState, logoutUser }) {
  const navigate = useNavigate();

  const logout = (e) => {
    logoutUser(e);
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="header">
        <Container className="navbar-container">
          <Navbar.Brand className="app-logo" href="/">
            All Sports Goes News App
          </Navbar.Brand>
          <div className="desk-nav">
            <Nav className="me-auto desk-nav-links">
              {!superState.auth && (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
              {superState.auth && !superState.admin && (
                <>
                  <Nav.Link className="at" href="/create">Article <br></br>Creation</Nav.Link>
                  <Nav.Link className="article-tabs" href="/articles/user">View My <br></br>Articles</Nav.Link>
                </>
              )}
              {superState.admin && (
                <>
                  <Nav.Link className="artricle-review" href="/articles/editor">Review Articles</Nav.Link>
                </>
              )}
              {superState.auth && (
                <Nav.Link className="logout" href="/" onClick={(e) => logout(e)}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
            {superState.avatar && (
              <Nav.Link href="/profile">
                <img className="profile-picture" src={superState.avatar} alt="profile picture" />
              </Nav.Link>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;