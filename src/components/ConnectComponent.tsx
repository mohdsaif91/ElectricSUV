import { Text, Field, withDatasourceCheck, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

type ConnectComponentProps = ComponentProps & {
  fields: {
    sectionHeading: Field<string>;
    heading: Field<string>;
    rightImage: Field<string>;
    body: Field<string>;
  };
};

let oldScrollY = 0;

const ConnectComponent = (props: ConnectComponentProps): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  let refNumber = 0;

  const handleScroll = () => {
    const pageHeight: any = document.querySelector('.main-container');

    if (window.scrollY > oldScrollY) {
      if (16 > refNumber) {
        refNumber++;
      }
      setScrollY(refNumber);
      console.log('down ', refNumber);
    } else {
      if (refNumber > -18) {
        refNumber--;
      }
      setScrollY(refNumber);
      console.log('down ', refNumber);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="connect-container">
      <Row className="connect-row">
        <Col lg="5" className="text-column">
          <span className="card-with-image-heading is-view">
            <Text field={props.fields.sectionHeading} />
          </span>

          <h1 className="h1">
            <span className="h1-text">
              <RichText field={props.fields.heading} />
            </span>
          </h1>
          <div className="connect-body">
            <Text field={props.fields.body} />
          </div>
        </Col>
        <Col lg="7" className="right-image-container">
          <figure className="connect-figure rellax">
            <img
              style={{ transform: `translate3d(0px, ${scrollY}%, 0px)` }}
              className="right-image"
              src={props.fields.rightImage.value}
              alt="Mahindra"
            />
          </figure>
        </Col>
      </Row>
    </div>
  );
};

export default withDatasourceCheck()<ConnectComponentProps>(ConnectComponent);
