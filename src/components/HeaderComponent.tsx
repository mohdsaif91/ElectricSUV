import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Navbar, NavLink } from 'react-bootstrap';

type HeaderComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const menuItems = ['BRANDS', 'DESIGN', 'eSUVs', 'TECHNOLOGY', 'GALLERY', 'MEDIA ROOM'];

const HeaderComponent = (props: HeaderComponentProps): JSX.Element => (
  <nav className="navbar navbar-expand-lg fixed-top" style={{background: 'black'}}>
  <div className='container p-0 pb-1'>
    <NavLink className='navbar-brand d-inline-flex align-items-start p-0'>
      <img
        src="../data/media/img/logoMahindra.png" 
        width="130"
        height="20"
        alt="Mahindra" className='m-0 mb-1 p-0'
      />
    </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
          <ul className="nav p-0 m-0 ml-auto " id="navItems">
              {menuItems.map((mi, index) => (
                  <li key={mi} className="nav-item ">
                    <a key={mi} href={`#`+mi.toLowerCase()} className="m-0 mt-1 nav-link navlinks" >
                      {index == 2 ? mi : mi.toUpperCase()}
                    </a>
                  </li>
                ))}
              <li className='navlinks nav-item'>
                <button className='btn btn-outline-light m-0 mt-1 p-2 pb-0'>UPDATE ME</button>
              </li>
          </ul>
      </Navbar.Collapse>
  </div>
</nav>
);

export default withDatasourceCheck()<HeaderComponentProps>(HeaderComponent);
