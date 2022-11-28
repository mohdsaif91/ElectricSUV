import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

type HeaderComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const menuItems = ['BRANDS', 'DESIGN', 'eSUVs', 'TECHNOLOGY', 'GALLERY', 'MEDIA ROOM'];

const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top" style={{background: 'black'}}>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" ></script>

      <div className='container p-0 pb-1'>
        <NavLink className='navbar-brand d-inline-flex align-items-start p-0'>
          <img
            src="../data/media/img/logoMahindra.png" 
            width="130"
            height="20"
            alt="Mahindra" className='m-0 mb-1 p-0'
          />
        </NavLink>
        <button
            className="navbar-toggler"
            type = "button"
            data-toggle="collapse"
            data-target="#menuItems"
            aria-controls="menuItems"
            aria-expanded="false"
            aria-label="Toggle Navigation"
        >
                  <span className='navbar-toggler-icon text-light'></span>
            {/* <FontAwesomeIcon icon={faBars} className="text-light"/> */}

                </button>
          <div className='navbar-collapse collapse' id="menuItems">
              <ul className="nav p-0 m-0 ml-auto " id="">
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
          </div>
      </div>
    </nav>
    )
}
  

export default withDatasourceCheck()<HeaderComponentProps>(HeaderComponent);
