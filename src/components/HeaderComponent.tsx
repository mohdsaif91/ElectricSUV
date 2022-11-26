import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type HeaderComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const menuItems = ['BRANDS', 'DESIGN', 'eSUVs', 'TECHNOLOGY', 'GALLERY', 'MEDIA ROOM'];

const HeaderComponent = (props: HeaderComponentProps): JSX.Element => (
  <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
    <Navbar.Brand href="#">
      <img src="logo.svg" width="100" height="50" alt="Mahindra"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto text-uppercase fs-2">
        {menuItems.map((mi) => (
          <Nav.Item key={mi} className="mx-3">
            <Nav.Link href="#" key={mi} className="text-light bg-dark">
              {mi}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Navbar.Collapse>
    <button type="button" className="btn btn-outline-light">
      {'UPDATE ME'}
    </button>
  </Navbar>
);

export default withDatasourceCheck()<HeaderComponentProps>(HeaderComponent);
