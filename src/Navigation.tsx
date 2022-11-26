import { NavLink } from 'react-bootstrap';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.


const Navigation = (): JSX.Element => {
  const menuItems = ['BRANDS', 'DESIGN', 'eSUVs', 'TECHNOLOGY', 'GALLERY', 'MEDIA ROOM'];

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{background: 'black'}}>
        <div className='container p-1 pb-0'>
          <NavLink className='navbar-brand d-inline-flex align-items-start p-0'>
            <img
              src="../data/media/img/logoMahindra.png" 
              width="130"
              height="20"
              alt="Mahindra" className='m-0 mb-1 p-0'
            />
          </NavLink>
          <div className="">
              <ul className="navbar-nav p-0 m-0 ">
              {menuItems.map((mi, index) => (
                  <li key={mi} className="mx-2 ">
                    <NavLink key={mi} className="m-0 p-2 pb-1 navlinks" >
                      {index == 2 ? mi : mi.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
                <li className='navlinks '>
                  <button className='btn btn-outline-light m-0 mt-1'>UPDATE ME</button>
                </li>
              </ul>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navigation;
