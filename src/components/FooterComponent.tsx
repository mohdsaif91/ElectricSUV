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
  };
};

const FooterComponent = (props: FooterComponentProps): JSX.Element => {
  return (
    <div
      className="container-fluid footer-container no-padding"
      style={{ backgroundColor: 'black' }}
    >
      <div className="footertext " id="footer">
        <Row className="footer-row">
          <Col lg={3} md={4} sm={12} className="col-md-2 d-flex align-items-center p-0">
            <img src="logo.svg" width="130" height="20" alt="Mahindra"></img>
          </Col>
          <Col lg={6} md={4} sm={12} className={`${FCCSS.footerLinks} col-md-2 p-0 d-flex`}>
            <div>
              {props.fields.footList.map((item, index) => {
                return (
                  <a
                    href={item.fields.url.value}
                    key={index}
                    className={`${FCCSS.footerLinkItems}`}
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
            className={`${FCCSS.socialMediaContainer} col-md-3 d-flex align-items-center`}
          >
            <div className="d-flex justify-content-end">
              <div className="mx-2">
                <a href="https://www.facebook.com/mahindrabornelectric/" target="_blank">
                  <TfiFacebook />
                </a>
              </div>
              <div className="mx-2">
                <a href="https://twitter.com/born_electric/" target={'_blank'}>
                  <TfiTwitterAlt />
                </a>
              </div>
              <div className="mx-2">
                <a href="#" target={'_blank'}>
                  <TbBrandInstagram />
                </a>
              </div>
              <div className="mx-2">
                <a href="#" target={'_blank'}>
                  <TfiLinkedin />
                </a>
              </div>
              <div className="mx-2">
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
