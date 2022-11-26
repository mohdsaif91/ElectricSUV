import { withDatasourceCheck, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Col, Container, Row } from 'react-bootstrap';

type TwoColumnWIthImageProps = ComponentProps & {
  fields: {
    backgroundColor: Field<string>;
    heading: Field<string>;
    cardText1: Field<string>;
    cardIcon1: Field<string>;
    cardImage1: Field<string>;
    cardText2: Field<string>;
    cardIcon2: Field<string>;
    cardImage2: Field<string>;
  };
};

const TwoColumnWithImage = (props: TwoColumnWIthImageProps): JSX.Element => (
  <Container className="card-with-image-container">
    <Row>
      <Col>
        <span className="card-with-image-heading is-view">
          <Text field={props.fields.heading}></Text>
        </span>
      </Col>
    </Row>
    <Row className="content-container">
      <Col lg="6" className="card-with-image">
        <div className="card-body">
          <div className="card-icon-container">
            <img className="card-icon" src={props.fields.cardIcon1.value} alt="Mahindra" />
          </div>
          <span className="card-text">
            <Text field={props.fields.cardText1} />
          </span>
        </div>
        <img className="card-image" src={props.fields.cardImage1.value} alt="Mahindra" />
      </Col>
      <Col lg="6" className="card-with-image">
        <div className="card-body">
          <div className="card-icon-container">
            <img className="card-icon" src={props.fields.cardIcon2.value} alt="Mahindra" />
          </div>
          <span className="card-text">
            <Text field={props.fields.cardText2} />
          </span>
        </div>
        <img className="card-image" src={props.fields.cardImage2.value} alt="Mahindra" />
      </Col>
    </Row>
  </Container>
);

export default withDatasourceCheck()<TwoColumnWIthImageProps>(TwoColumnWithImage);
