import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Row } from 'react-bootstrap';
import { BsYoutube } from 'react-icons/bs';
import { TbBrandInstagram } from 'react-icons/tb';
import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';

import FCCSS from './FooterComponent.module.css';

interface footerItem {
  fields: {
    label: Field<string>;
    url: Field<string>;
  };
}

type FooterComponentProps = ComponentProps & {
  fields: {
    copyright: Field<string>;
    footList: footerItem[];
    logo: Field<string>
  };
};

const FooterComponent = (props: FooterComponentProps): JSX.Element => {
  return (
    <div
      className="container-fluid footer-container no-padding "
      style={{ backgroundColor: 'black' }}
    >
      <div className="footertext container " id="footer">
        <Row className=" p-2 pt-3 pb-3">
          <Col lg={2} md={3} sm={12} className="col-md-2 d-flex p-0 align-items-center ">
            <img src={props.fields.logo.value} width="130" height="20" alt="Mahindra"/>
          </Col>
          <Col lg={7} md={5} sm={12} className={`${FCCSS.footerLinks} col-md-2 p-0 d-flex `}>
            <div className=''>
              {props.fields.footList.map((item, index) => {
                return (
                  <a
                    href={item.fields.url.value}
                    key={index}
                    className={`${FCCSS.footerLinkItems} me-3`}
                    target={'_blank'}
                  >
                    {item.fields.label.value}
                  </a>
                );
              })}
            </div>
            <p className={`p-0 pt-3 ${FCCSS.copyRight}`}>{props.fields.copyright.value}</p>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={12}
            className={`${FCCSS.socialMediaContainer}  d-flex align-items-center  p-0`}
          >
            <div className="d-flex justify-content-end  ">
              <div className="me-4">
                <a href="https://www.facebook.com/mahindrabornelectric/" target="_blank">
                  <TfiFacebook />
                </a>
              </div>
              <div className="me-4">
                <a href="https://twitter.com/born_electric/" target={'_blank'}>
                  <TfiTwitterAlt />
                </a>
              </div>
              <div className="me-4">
                <a href="#" target={'_blank'}>
                  <TbBrandInstagram />
                </a>
              </div>
              <div className="me-4">
                <a href="#" target={'_blank'}>
                  <TfiLinkedin />
                </a>
              </div>
              <div className="">
                <a href="#" target={'_blank'}>
                  <BsYoutube />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<FooterComponentProps>(FooterComponent);
