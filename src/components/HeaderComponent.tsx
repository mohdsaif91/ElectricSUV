import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiBars3 } from 'react-icons/hi2';

interface headerItem {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

type HeaderComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    menuItems: headerItem[];
  };
};

// const menuItems = ['BRANDS', 'DESIGN', 'eSUVs', 'TECHNOLOGY', 'GALLERY', 'MEDIA ROOM'];

const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window != undefined) {
      const svg = document.querySelector('.navbarToggleIcon svg');
      console.log(svg?.removeAttribute('ariahidden'), 'nav svg icon');
      console.log(svg?.ariaHidden);
      const sections = document.querySelectorAll('section');
      const navLi = document.querySelectorAll('.navbar-nav div a');
      let current: any = undefined;

      window.onscroll = () => {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 60) {
            section.getAttribute('id') == null
              ? (current = '')
              : (current = section.getAttribute('id'));
          }
        });
        navLi.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href')?.split('').slice(1).join('') == current) {
            item.classList.add('active');
          }
        });
      };
    }
  }, []);

  return (
    <>
      <Navbar expand="xl" fixed="top" className="navbar p-0 pb-2 pt-2 m-0 ">
        <Container className="p-0 ">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" className="navbarToggleIcon">
            <HiBars3 />
          </Navbar.Toggle>
          <Navbar.Brand href="#">
            <img
              src="../data/media/img/logoMahindra.png"
              width="130"
              height="20"
              alt="Mahindra"
              className="m-0 mb-1 p-0"
            />
          </Navbar.Brand>

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xl"
            aria-labelledby="offcanvasNavbarLabel-expand-xl"
            placement="start"
            className="navCanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xl"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0 m-0">
              <Nav
                className="justify-content-end flex-grow-1 align-items-center p-0 m-0 "
                id="suv-navbar"
              >
                {props.fields.menuItems.map((el: headerItem, index) => (
                  <Nav.Item className="" key={index}>
                    <Nav.Link
                      href={el.fields.url.value}
                      key={index}
                      className="navlinks p-2 pt-3 pb-0 mx-0 m-0"
                    >
                      {el.fields.label.value} <AiOutlineArrowRight className="d-lg-none" />
                      <span></span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
                <Nav.Item>
                  <Nav.Link className="m-0 p-0 pt-2 pb-2 ">
                    <button
                      type="button"
                      className="btn btn-outline-light d-md-none d-lg-block d-sm-none spbtn1"
                      onClick={(show) => setShow(true)}
                    >
                      {'UPDATE ME'}
                    </button>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="p-0 ">
                    <button
                      className="d-md-block d-sm-block d-lg-none btn btn-link p-2 pt-0 border border-0 spbtn2"
                      onClick={(show) => setShow(true)}
                    >
                      {'UPDATE ME'} <AiOutlineArrowRight className="d-lg-none" />
                    </button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={(show: any) => setShow(false)}>
        <Offcanvas.Header className="d-flex justify-content-end p-5 pb-0 pt-2 clsBtn" closeButton>
          <Offcanvas.Title className=""></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sideNavOffcanvas">
          <div className="">
            <div className=" p-4 pt-5 m-2 mt-4">
              <h1 className="fw-light  text-uppercase ">Be the first to know</h1>
              <p className="text-dark fs-7">
                Register your interest and join us on an electrifying journey of discovery.
              </p>
              <form className=" updateForm">
                <div className="row mb-3">
                  <div className="col ">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="FULL NAME"
                      id="txtFullName1"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="MOBILE NUMBER"
                      id="txtFullName1"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="EMAIL"
                      id="txtFullName1"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <select className="form-control" id="sel1">
                      <option value="">Select Option</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-control" id="sel1">
                      <option value="">Select Option</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className=" text-dark ">
                  <div className="form-check  ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      I agree to receive a call back from Mahindra &amp; Mahindra and associated
                      agencies and organizations regarding my interest in Mahindra brands.
                      <br />I also agree to website's
                      <a href="#">Terms and Conditions</a> and
                      <a href="#">Privacy Policy</a>.
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Get updates via WhatsApp.
                    </label>
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-outline-dark btn-lg ">Send</button>
                </div>
              </form>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default withDatasourceCheck()<HeaderComponentProps>(HeaderComponent);
